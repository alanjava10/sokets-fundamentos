const { io } = require('../server');

io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicacion'
    })


    client.on('disconnect', () => {
        console.log('Usuario Desconectado');
    })

    //Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {

        client.broadcast.emit('enviarMensaje', data);

        // console.log(mensaje);
        // if (data.usuario) {
        //     callback({
        //         resp: 'TODO SALIO BIEN'

        //     });
        // } else {
        //     callback({
        //         resp: 'TODO SALIO MAL!!!'

        //     });

        // }



    })


})