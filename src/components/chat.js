import React, { Component } from 'react'
import { RaisedButton, Card, TextField, List, ListItem } from 'material-ui'
import io from 'socket.io-client'

import MessageList from './messageList'

const socket = io('localhost:4001')

class Chat extends Component {
  constructor(props) {
    super(props)

    this.state = {
      messages: [],
      username: '',
      message: ''
    }
  }

  componentDidMount() {
    socket.on('RECEIVE_MESSAGE', message => {
      this.receiveMessage(message)
    })
  }

  receiveMessage(message) {
    console.log(message)
    this.setState({ messages: [...this.state.messages, message] })
  }

  sendMessage = () => {
    socket.emit('SEND_MESSAGE', {
      author: this.state.username,
      message: this.state.message
    })
    this.setState({ message: '' })
  }

  render() {
    return (
      <div className="test">
        <Card>
          <MessageList messages={this.state.messages} />
        </Card>
        <Card>
          <div style={styles.container}>
            <TextField
              hintText="Username"
              value={this.state.username}
              onChange={ev => this.setState({ username: ev.target.value })}
            />

            <TextField
              hintText="Message"
              value={this.state.message}
              onChange={ev => this.setState({ message: ev.target.value })}
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

export default Chat
