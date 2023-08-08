const socketio = require("socket.io");
let io;
let onlineUsers = new Map();

module.exports = {
  connection: function (server) {
    io = socketio(server);
    io.on("connection", (socket) => {
      socket.on("add-user", (userId) => {
        onlineUsers.set(userId, socket.id);
      });
    });
  },

  emit: function (event, data, target) {
    const sendUserSocket = onlineUsers.get(target);
    if (io && sendUserSocket) {
      io.sockets.to(sendUserSocket).emit(event, data);
    }
  },
};
