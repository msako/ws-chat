import React from 'react'
import { List, ListItem } from 'material-ui/List'
import Card from 'material-ui/Card'
import format from 'date-fns/format'
import Message from './message'

const formatDate = timestamp => format(new Date(timestamp), 'MM/DD HH:mm')

const renderList = props => (
  <Card>
    <List>
      {props.messages.map((message, index) => {
        message.date = formatDate(message.id)

        return (
          <ListItem key={index} innerDivStyle={styles.messagelist}>
            <Message
              key={index}
              message={message}
              styles={props.styles || styles}
            />
          </ListItem>
        )
      })}
    </List>
  </Card>
)

const renderNotice = (
  <Card>
    <List>
      <ListItem disabled={true}>
        <span>Start chat...</span>
      </ListItem>
    </List>
  </Card>
)

const MessageList = props =>
  props.messages.length > 0 ? renderList(props) : renderNotice

const styles = {
  date: {
    fontSize: '0.8em',
    color: 'gray',
    marginRight: 12,
    paddingLeft: 12
  },
  author: {
    fontWeight: 'bold'
  },
  messagelist: {
    padding: 4
  }
}

export default MessageList
