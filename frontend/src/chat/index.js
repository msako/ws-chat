import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { blue300 } from 'material-ui/styles/colors'
import io from 'socket.io-client'

import { actions } from '../reducers/chat'
import MessageList from './components/messageList'
import MessageForm from './components/messageForm'
import Alert from './components/alert'

class Chat extends Component {
  state = {
    open: true
  }

  componentDidMount() {
    this.socket = io(process.env.REACT_APP_WS_URL)

    const { id } = this.props.match.params
    const socket = this.socket

    socket.on('connect', () => {
      this.props.setRoom(id)
      socket.emit('room', id)
      this.startTimer()
    })

    socket.on('receive_message', message => {
      this.props.addMessage(message)
    })

    socket.on('update_points', points => {
      this.props.updatePoints(points)
    })
  }

  startTimer = () => {
    setInterval(() => {
      this.socket.emit('timer')
      this.updatePoints() // temporary update on client side
    }, 5000)
  }

  // TODO: This must be called from backend with points
  updatePoints = () => {
    const points = this.props.chat.points - 10
    if (points >= 0) {
      this.props.updatePoints(points)
    } else {
      this.handleOpen()
    }
  }

  sendMessage = () => {
    const { username, message } = this.props.chat
    if (message === '' || username === '') {
      return
    }
    this.socket.emit('send_message', {
      author: this.props.chat.username,
      message: this.props.chat.message,
      room: this.props.chat.room
    })
    this.props.sendMessage()
  }

  onMessageChange = e => {
    this.props.updateMessage(e.target.value)
  }

  onUsernameChange = e => {
    this.props.updateUsername(e.target.value)
  }

  handleOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  render() {
    return (
      <div>
        <MessageList messages={this.props.chat.messages} />
        <MessageForm
          styles={styles}
          username={this.props.chat.username}
          onUsernameChange={this.onUsernameChange}
          message={this.props.chat.message}
          onMessageChange={this.onMessageChange}
          points={this.props.chat.points}
          sendMessage={this.sendMessage}
        />
        <Alert open={this.state.open} handleClose={this.handleClose} />
      </div>
    )
  }
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'column',
    margin: 12,
    padding: 12
  },
  button: {
    marginTop: 16
  },
  chip: blue300
}

const mapStateToPros = ({ chat }) => {
  return { chat }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToPros, mapDispatchToProps)(Chat)
