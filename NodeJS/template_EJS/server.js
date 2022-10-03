const express = require('express');
const app = express();
const port = 3000;
const path = require('path'); //add esse require nativo node 

app.set('view engine', 'ejs'); //engine irá buscar .ejs 
app.set('views', './views'); // define a pasta
app.use('/', express.static(path.join(__dirname, 'views'))); // requer path nativo, path para o style.css

var pessoas = [
    {
        'nome': 'Paulo',
        'idade': 12
    },
    {
        'nome': 'Jõao',
        'idade': 15,
    },
    {
        'nome': 'Marina',
        'idade': 25,
    },
]

const me = ["Geraldo","apple","orange"];

// routers
app.get('/',(req,res)=>{
    //res.send("Pagina inicial");
    res.render('index',{pessoas}); //paramentro
});

app.get('/about',(req,res)=>{
    //res.send("Pagina inicial");
    res.render('about',{me, pessoas});
});




app.listen(3000,()=>{
    console.log(`server running on port ${port}`);
})