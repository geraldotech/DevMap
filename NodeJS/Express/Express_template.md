# Fazer template com express, ejs

>> npm install npm express body-parser ejs

### A base
```
const express = require('express');
var bodyParser = require('body-parser')

const path = require('path');

const app = express();

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/views'));


app.listen(5000,()=>{
    console.log('server rodando!');
})
```
### Adicionar alguma mensagem
```
app.get('/',(req,res)=>{
     res.send("home page!")
})
```

### create public folder

### Fazendo slug

    app.get('/:slug',(req,res)=>{
        res.send(req.params.slug);
    })

#### testar abrir http://127.0.0.1:5000/something e ver se é recuperado

### Testando buscas use a url e verifique o console:
http://127.0.0.1:5000/?search=code
>>E jogar um console 

    app.get('/',(req,res)=>{
        res.send("home page!");
        console.log(req.query);
    })

### acessando home ou buscando

    app.get('/',(req,res)=>{
        
        if(req.query.busca == null){
            res.send('home');
        }else{
            res.send('Você buscou: '+req.query.busca);
        }
    
    });


1.Alterar o nome /views para /pages e  
2.criar essa pasta e inside um home.html 
3. change 

```
    res.send <TO> res.render('home',{})
```
### Fazer também a pasta public > style.css e images 

# include
in pages create folder "partials" > header.html > footer.html
mova o conteudo para os respectivos arquivos e use o include na home

    <%- include('partials/header.html') %>

## fazer o single
pages create single.html e add includes this file...


#### change, delete or comment
    res.send(req.params.slug); 
>to  
  ```  
  res.render('single',{}); 
  ```

# Buscar
Fazer a busca.html e mudar
```
 res.send('Você buscou: '+req.query.busca);
 to
     res.render('busca',{})
```

