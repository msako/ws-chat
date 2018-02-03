import React, { Component } from 'react'
import { RaisedButton, Card, TextField } from 'material-ui'
import io from 'socket.io-client'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from '../reducers/chat'
import MessageList from './components/messageList'

class Chat extends Component {
  componentWillMount() {}

  componentDidMount() {
    this.socket = io(process.env.REACT_APP_WS_URL)

    const { id } = this.props.match.params
    const socket = this.socket

    socket.on('connect', () => {
      this.props.setRoom(id)
      socket.emit('room', id)
    })

    socket.on('receive_message', message => {
      this.props.addMessage(message)
    })
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

  onMessageChanged = e => {
    this.props.updateMessage(e.target.value)
  }

  onUsernameChanged = e => {
    this.props.updateUsername(e.target.value)
  }

  render() {
    return (
      <div>
        <Card>
          <MessageList messages={this.props.chat.messages} />
        </Card>
        <Card>
          <div style={styles.container}>
            <TextField
              hintText="Username"
              value={this.props.chat.username}
              onChange={this.onUsernameChanged}
            />
            <TextField
              hintText="Message"
              value={this.props.chat.message}
              onChange={this.onMessageChanged}
            />
            <RaisedButton
              label="Send"
              primary={true}
              onClick={this.sendMessage}
              style={styles.button}
            />
          </div>
        </Card>
      </div>
    )
  }
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'column',
    margin: '12px',
    padding: '12px'
  },
  button: {
    marginTop: '16px'
  }
}

const mapStateToPros = ({ chat }) => {
  return { chat }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToPros, mapDispatchToProps)(Chat)
