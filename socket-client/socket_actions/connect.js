var express = require('express');
var router = express.Router();


io.on('connection', (socket) => {
    console.log('Usuário conectado');

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});


module.exports = socketConnect;