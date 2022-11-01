const express = require('express');

const app = express();
const http = require('http');
const { send } = require('process');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

exports.checkRoom = (req, res) => {
    console.log('chegou na controller');
    console.log(req.params.roomId);

    io.on("connection", socket => {
        socket.join(req.params.roomId);
        console.log('conectado na sala: ' + req.params.roomId)
    });
    io.sockets.adapter.rooms;
    
    res.send('conectado na sala: ' + req.params.roomId);
}