const http = require('http');
const fs = require('fs');
const hostname = "127.0.0.1";
const port = 4000;
  

const server = http.createServer((req,res)=>{   
   
     if(req.url == '/'){

    fs.readFile('index.html',function(err,data){

        fs.appendFile('file.txt','\n novo access from url',(err)=>{
            if(err) throw err;
            console.log('novo acesso! ');
        })

        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end();
    })
}
else if(req.url == '/read'){
//    res.end('ok');

fs.readFile('geraldo.txt',function(err,data){

    res.end((data.toString()));;
    toString() //buffer converte para String
})
}
else {
    fs.readFile('404.html',function(err,data){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end();
    })
}

})

server.listen(port,hostname,()=>{
    console.log('server running in port :4000');
})