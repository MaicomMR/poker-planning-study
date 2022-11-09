const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

const routesFile = require('./routes/web');
app.use('/', routesFile);

server.listen(3001, () => {
  console.log('listening on *:3001');
});