//Refencias HTML
const lblonline  = document.querySelector('#lblonline');
const lbloffline = document.querySelector('#lbloffline');
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar  = document.querySelector('#btnEnviar');

const socket = io();

socket.on('connect', () => {
    //console.log('Conectado al Server...');
    lblonline.style.display  = '';
    lbloffline.style.display = 'none';
});
socket.on('disconnect', () => {
    //console.log('Desconectado del Server...');
    lblonline.style.display  = 'none';
    lbloffline.style.display = '';    
});

socket.on('enviar-mensaje', (payload) => {
    console.log(payload);
})

btnEnviar.addEventListener('click', () => {
    const sms = txtMensaje.value;
    const payload = {
        mensaje: sms,
        uid: '1a5sa56a1s6s161s6a1s6a1s6as15',
        fecha: new Date().getTime()
    }

    socket.emit('enviar-mensaje', payload, (id) => {
        console.log('Desde el Server', id);
    });
});