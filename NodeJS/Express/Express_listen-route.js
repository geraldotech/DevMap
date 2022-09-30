Express listen-route

const express = require('express');
const app = express();

app.get("/",(req,res)=>{
    return res.json({"name":"Geraldo"})
})

app.listen(3001, () => {
    console.log('server rodando!');
})


Install `REST Client` for VSCode because browser only support get request

create a request.http or new page > Plaint Text > select http