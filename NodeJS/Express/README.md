# Express

###

Projet with Node + Express + ejs

::before 

```js
npm init in directory
```
install depedencia do Express

```js
npm install express
npm install ejs
```

### Criar rota  simples

```js

const express = require('express');
const app = express();

app.get("/",(req,res)=>{
    return res.json({"name":"Geraldo"})
})

app.listen(3001, () => {
    console.log('server rodando!');
})
```
Install `REST Client` for VSCode because browser only support get request

create a request.http or new page > Plaint Text > select http


### require dependencias no index.js e configurar server
```js
const express = require('express');
const app = express();

//rota para home page
app.get('/',(req,res)=>{
    res.send("Pagina inicial");
})

app.listen(5000,()=>{
    console.log('server rodando!');
})
```

## Fazendo estrutura
1.criar pasta public > style.css  
2.criar pasta views > criar arquivo index.html


## code estrutura  

```js
const path = require('path'); //add esse require nativo node 

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views',path.join(__dirname, '/pages'));


app.get('/',(req,res)=>{
    //res.send("Pagina inicial");
    res.render('index',{})
});
```

### code completo 
```js
const express = require('express');
const app = express();
const path = require('path'); //nativo node


app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views',path.join(__dirname, '/views'));



//rota para home page
app.get('/',(req,res)=>{
    //res.send("Pagina inicial");
    res.render('index',{});
});

app.listen(5000,()=>{
    console.log('server rodando!');
})
```

### Display variaveis no html:

####  
index.js adicionar entre {}
```js
app.get('/',(req,res)=>{
res.render('index',{nome:"Geraldo"});
});
```
No index.html   
  ```<h2>Ola <%= nome %>!</h2>```


### Comment in html  
change = to # in string  
  ```<h2>Ola <%# nome %> !</h2>```

# bodyParser
<a href="https://cursos.dankicode.com/campus/curso-nodejs/desenvolvendo-projeto-22">video</a>
integração com formulario, envio de arquivos e mais.
1. Install 
```
npm install body-parser 
```
2. require  
```
const bodyParser = require('body-parser'); 
```
3. use project 

```js
  //body-parser
  app.use( bodyParser.json());
  app.use(bodyParser.urlencoded({
  extended: true
  }));
```

# 404
<a href="http://expressjs.com/en/starter/faq.html#how-do-i-handle-404-responses">404 page</a>

```js
//404
app.use((req,res,next)=>{
    res.status(404).send("Sorry cant find that!");
})
```
404.html by me 

```js
//404
app.use((req,res,next)=>{
    res.status(404).render('404');
})
``` 

# show array info

index.js 

```js
var tarefas = ['arrumar quarto','fazer compras','teclado'];
app.get('/',(req,res)=>{

res.render('index',{tarefaslist:tarefas});

});
```
index.html  
```js
    <div class="tarefas">
            <% for (let i = 0; i < tarefaslist.length; i++ ){ %>
            
                <p><%= tarefaslist[i] %></p>

                <% } %>
        </div>

```
# Download
Force download pdf, txt, image
```js
app.get('/download/pdf',(req,res)=>{
    res.download('pages/report.pdf');
    //res.send('ok');
})
```
com return message <a href="https://expressjs.com/en/4x/api.html#res.download">res.download</a>
```js
//download
app.get('/download/pdf',(req,res)=>{
    //res.send("aaa");

    res.download('pages/reportd.pdf', function(err){
       if(err){
        res.send("apagado");
       } 
    })
})
```
## Static files
[https://expressjs.com](https://expressjs.com/en/starter/static-files.html) 

http://127.0.0.1:5000/images/code.jpg
```js
app.use(express.static('public')); 
app.use('/images', express.static('images'));
```

# Socket.io

```js
npm install express socket.io
```


# express-fileupload
#####  <a href="https://www.npmjs.com/package/express-fileupload"> https://www.npmjs.com/package/express-fileupload</a>  




