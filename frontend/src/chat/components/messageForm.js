import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import Card from 'material-ui/Card'
import Chip from 'material-ui/Chip'
import TextField from 'material-ui/TextField'

const MessageForm = props => (
  <Card>
    <div style={props.styles.container}>
      <TextField
        hintText="Username"
        value={props.username}
        onChange={props.onUsernameChange}
      />
      <TextField
        hintText="Message"
        value={props.message}
        onChange={props.onMessageChange}
      />
      <Chip backgroundColor={props.styles.chip}>{props.points} PT</Chip>
      <RaisedButton
        label="Send"
        primary={true}
        onClick={props.sendMessage}
        style={props.styles.button}
      />
    </div>
  </Card>
)

export default MessageForm
