const express = require('express')
const socket = require('socket.io')
const https = require('https')
const fs = require('fs')

const app = express()
const port = 4001

const server = https
  .createServer(
    {
      key: fs.readFileSync('key.pem'),
      cert: fs.readFileSync('cert.pem')
    },
    app
  )
  .listen(port)

/*
server = app.listen(port, () => {
  console.log('server is running on port ', port)
})
*/

io = socket(server)

io.on('connection', socket => {
  console.log(socket.id, ' is connected.')

  socket.on('SEND_MESSAGE', data => {
    data.id = Date.now()

    io.emit('RECEIVE_MESSAGE', data)
  })
})
