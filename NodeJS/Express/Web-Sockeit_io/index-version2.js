const { SSL_OP_NO_TICKET } = require('constants');

const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);


var usuarios = [];

app.get('/', (req, res) => {

    res.sendFile(__dirname + '/index.html');

});


io.on('connection',(socket)=>{

socket.on('chat message',(obj)=>{
    io.emit('chat message',obj)
    //console.log(obj);
})


})
    //console.log('usuario conectado');
    //io.emit('conectado','estou conectado!')
/*     socket.broadcast.emit('novo usuario','um novo usuario se conectou');
    socket.on('disconnect', () => {
        console.log('desconectado!');
    })

 */



http.listen(3000, () => {
  console.log('listening on *:3000');

}); 
