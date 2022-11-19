const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const server = http.createServer(app);
const routes = require('./routes');
// const socket = require('./controllers/socketController');

app.use(express.static(path.resolve(__dirname, '../dist')));

app.use(routes);
app.set('views', path.join(__dirname, '../dist/views'));
app.set('view engine', 'ejs');

server.listen(3000, () => {
  console.log('listening on *:3000');
});



// SOCKET
const { Server } = require("socket.io");
const io = new Server(server);

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