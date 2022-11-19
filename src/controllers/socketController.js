const { Server } = require("socket.io");
const socket = new Server({ /* options */ });

module.exports = socket;