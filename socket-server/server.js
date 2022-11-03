const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const routesFile = require('./routes/web');
app.use('/', routesFile);

io.on('connection', (socket) => {
  console.log('a user connected: ' + socket.id);
  socket.broadcast.emit('hi');
  
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('room_message', (object) => {
    console.log('------');
    console.log('msg:' + object.message);
    console.log('room:' + object.roomId);

    io.emit('room_message' + object.roomId, object.message);
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});