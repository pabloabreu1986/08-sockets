const express = require('express');
const path = require('path');
const socketIO = require('socket.io');
const http = require('http');
const app = express();

let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// esta es la conección del backend
let io = socketIO(server);

io.on('connection', client => {
  console.log('Usuario conectado');

  //Escuchar del cliente
  client.on('disconnect', () => {
    console.log('Usuario desconectado');
  });

  //Escuchar del cliente
  client.on('enviarMensaje', usuario => {
    console.log(usuario);
  });
});

server.listen(port, err => {
  if (err) throw new Error(err);

  console.log(`Servidor corriendo en puerto ${port}`);
});
