const {io} = require('../server');

io.on('connection', client => {
  console.log('Usuario conectado');

  //Envíar al cliente
  client.emit('serverMessage',{
    usuario: 'Pablo',
    message: 'El servidor está conectado'
  });

  //Escuchar el cliente
  client.on('disconnect', () => {
    console.log('Usuario desconectado');
  });

  //Escuchar el cliente
  client.on('enviarMensaje', (data, callback) => {
    console.log(data);
    client.broadcast.emit('enviarMensaje', data);
    // if (data.usuario) {
    //   callback({
    //     resp:'Todo OK'
    //   });
    // } else {
    //   callback({
    //     resp:'NOOOOO OK'
    //   });
    // }
  });
});