import React from 'react'

const Message = props => {
  const { styles, message } = props

  return (
    <div>
      <span style={styles.date}>{message.date}</span>
      <span style={styles.author}>{message.author}</span>: {message.message}
    </div>
  )
}

export default Message
