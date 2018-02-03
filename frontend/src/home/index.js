import React from 'react'
import { Link } from 'react-router-dom'
import { List, ListItem } from 'material-ui/List'
import { Card } from 'material-ui/Card'
import Subheader from 'material-ui/Subheader'
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble'

const Home = () => (
  <Card>
    <List>
      <Subheader>Rooms</Subheader>
      <Link to="/chat/lounge">
        <ListItem
          primaryText="Lounge"
          rightIcon={<CommunicationChatBubble />}
        />
      </Link>
      <Link to="/chat/macchiato">
        <ListItem
          primaryText="Macchiato"
          rightIcon={<CommunicationChatBubble />}
        />
      </Link>
      <Link to="/chat/latte">
        <ListItem primaryText="Latte" rightIcon={<CommunicationChatBubble />} />
      </Link>
    </List>
  </Card>
)

export default Home
