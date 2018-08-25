var socket = io();

        //Escuchar
        socket.on('connect', function (client) {
            console.log('Conectado al servidor');
        });

        //Escuchar
        socket.on('serverMessage', function (server) {
            console.log(`Usuario: ${ server.usuario }`);
        });

        //Escuchar
        socket.on('disconnect', function () {
            console.log('Conexión del servidor perdida');
        });

        //Envíar información
        socket.emit('enviarMensaje', {
            usuario: 'Pablo'
        }, function (resp) {
          console.log('server: ',resp)
        });
