const { SSL_OP_NO_TICKET } = require('constants');


const app = require('express')();
const express = require('express');
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const path = require('path');

var usuarios = [];
var socketIds = [];


app.use('/public', express.static(path.join(__dirname, 'public')));

app.use('/assets', express.static('assets')); // router for static files

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/public/about.html');
});




io.on('connection',(socket)=>{

    socket.on('new user',function(data){
        if(usuarios.indexOf(data) != -1){            
            socket.emit('new user',{success: false});
           
        } else {
            usuarios.push(data);
            socketIds.push(socket.id);
          
            socket.emit('new user',{success: true});
           // socket.broadcast.emit('novo usuario','um novo usuario se conectou'); 
        }
    })


socket.on('chat message',(obj)=>{
    if(usuarios.indexOf(obj.nome) != -1 && usuarios.indexOf(obj.nome) == socketIds.indexOf(socket.id)){
        console.log('novo usuario: '+obj.nome);
        io.emit('chat message',obj);       
    } else {
        console.log('Erro: você não tem permissão para executar a ação');
    }
    //console.log(obj);
});  
   

    socket.on('disconnect', () => {
        let id = socketIds.indexOf(socket.id);
        socketIds.splice(id,1);
        usuarios.splice(id,1);
        console.log(socketIds);
        console.log(usuarios);
        console.log('user disconnected');
    })

})


http.listen(3000, () => {
  console.log('listening on *:3000');

}); 
