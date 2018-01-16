import React, { Component } from 'react'
import io from 'socket.io-client'

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
      <div>
        <div className="messages">
          {this.state.messages.map(message => {
            return (
              <div key={message.id}>
                {message.author}: {message.message}
              </div>
            )
          })}
        </div>
        <div className="card-footer">
          <input
            type="text"
            placeholder="Username"
            value={this.state.username}
            onChange={ev => this.setState({ username: ev.target.value })}
            className="form-control"
          />
          <br />
          <input
            type="text"
            placeholder="Message"
            className="form-control"
            value={this.state.message}
            onChange={ev => this.setState({ message: ev.target.value })}
          />
          <br />
          <button
            onClick={this.sendMessage}
            className="btn btn-primary form-control"
          >
            Send
          </button>
        </div>
      </div>
    )
  }
}

export default Chat
