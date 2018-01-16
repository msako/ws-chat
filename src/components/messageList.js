import React, { Component } from 'react'
import { List, ListItem } from 'material-ui'
import format from 'date-fns/format'
import Message from './message'

class MessageList extends Component {
  formatDate(timestamp) {
    return format(new Date(timestamp), 'MM/DD HH:mm')
  }
  renderList() {
    return (
      <List>
        {this.props.messages.map((message, index) => {
          message.date = this.formatDate(message.id)

          return (
            <ListItem key={index} innerDivStyle={styles.messagelist}>
              <Message key={index} message={message} styles={styles} />
            </ListItem>
          )
        })}
      </List>
    )
  }

  renderNotice() {
    return (
      <List>
        <ListItem disabled={true}>
          <span>Start chat...</span>
        </ListItem>
      </List>
    )
  }

  render() {
    return this.props.messages.length > 0
      ? this.renderList()
      : this.renderNotice()
  }
}

const styles = {
  date: {
    fontSize: '0.8em',
    color: 'gray',
    marginRight: 10
  },
  author: {
    fontWeight: 'bold'
  },
  messagelist: {
    padding: '4px'
  }
}

export default MessageList
