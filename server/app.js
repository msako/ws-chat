const express = require('express')
const redis = require('socket.io-redis')
const port = 8080
const app = express()

server = app.listen(port, () => {
  console.log('server is running on port ', port)
})

const io = require('socket.io')(server)

io.adapter(redis({ host: process.env.REDIS_HOST || '127.0.0.1', port: 6379 }))

io.on('connection', socket => {
  console.log(socket.id, ' is connected.')

  socket.on('SEND_MESSAGE', data => {
    data.id = Date.now()

    io.emit('RECEIVE_MESSAGE', data)
  })
})
