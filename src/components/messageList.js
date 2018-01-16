import React, { Component } from 'react'
import { List, ListItem } from 'material-ui'
import format from 'date-fns/format'
import Message from './message'

class MessageList extends Component {
  constructor(props) {
    super(props)
  }

  formatDate(timestamp) {
    return format(new Date(timestamp), 'MM/DD HH:mm')
  }

  render() {
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
