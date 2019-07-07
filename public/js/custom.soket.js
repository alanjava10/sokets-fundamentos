var socket = io();
socket.on('connect', function() {
        console.log('Conectado con el servidor');
    })
    //Escuchar succesos
socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});

//Son para enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Alan Cruz',
    mensaje: 'Hola nodeJs'
}, function(resp) {
    console.log('Respuesta server', resp)
})

//Escuchar informacion

socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje)
})