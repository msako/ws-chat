const express = require('express')
const socket = require('socket.io')

const app = express()
const port = 4001

server = app.listen(port, () => {
  console.log('server is running on port ', port)
})

io = socket(server)

io.on('connection', socket => {
  console.log(socket.id, ' is connected.')

  socket.on('SEND_MESSAGE', data => {
    data.id = Date.now()

    io.emit('RECEIVE_MESSAGE', data)
  })
})
