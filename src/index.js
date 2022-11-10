const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const server = http.createServer(app);
const routes = require('./routes');

app.use(routes);
app.set('views', path.join(__dirname, '../dist/views'));
app.set('view engine', 'ejs');

server.listen(3000, () => {
  console.log('listening on *:3000');
});