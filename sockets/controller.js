
const socketController = (socket) => {
    console.log('Cliente conectado', socket.id);

    socket.on('disconnect', () =>{
        console.log('Cliente desconectado', socket.id);
    });

    socket.on('enviar-mensaje', (payload, callback) =>{               
        const id = 'A15S1A564S564DA6G4H56G4';
        callback(id);
        
        socket.broadcast.emit('enviar-mensaje', payload);
    });
}


module.exports = {
    socketController
}