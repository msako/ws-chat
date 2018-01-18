import React, { Component } from 'react'
import { RaisedButton, Card, TextField } from 'material-ui'
import io from 'socket.io-client'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from '../reducers/chat'
import MessageList from './components/messageList'

const socket = io('localhost:4001')

class Chat extends Component {
  componentDidMount() {
    socket.on('RECEIVE_MESSAGE', message => {
      this.props.addMessage(message)
    })
  }

  sendMessage = () => {
    socket.emit('SEND_MESSAGE', {
      author: this.props.chat.username,
      message: this.props.chat.message
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
              style={{ marginTop: '16px' }}
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
  }
}

const mapStateToPros = ({ chat }) => {
  return { chat }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToPros, mapDispatchToProps)(Chat)
