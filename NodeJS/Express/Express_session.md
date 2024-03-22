# Express session
>sessão persistente
##### <a href="https://www.npmjs.com/package/express-session"> https://www.npmjs.com/package/express-session</a>  


### Install
    npm install express-session

### Add require
    var session = require('express-session');

### setup
    app.use(session({ 
    secret: 'keyboard cat', 
    cookie: { maxAge: 60000 }
    }))

### sample test
    
    app.get('/admin/login',(req,res)=>{
        if(req.session.login == null){
        req.session.login = "Geraldo";
            res.send("Sua sessão foi criada"); 
        // res.render('admin-login')
        } else {
        res.send(req.session.login);
    }                 
    })      
### Go to URL and check Application > Cookies

# Sistema de login:
>> não precisa usar banco de dados  
### requer body-parser para fazer .post  
###### const bodyParser = require('body-parser') 
    //body-parser
    app.use( bodyParser.json());
    app.use(bodyParser.urlencoded({
    extended: true
    }));


### app.get 
    app.get('/admin/login',(req,res)=>{
    if(req.session.login == null){
       res.render('login')
    } else {
    //res.send(req.session.login);
    res.render('panel',{});  
    }                 
    })       

### criar login.html 
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>
<body>
    <h3>Login com NodeJS</h3>
    <form method="post">
        <label for="login">Login:</label>
        <input type="text" name="login" />
        <label for="senha">Senha:</label>
        <input type="password" name="senha" />
        <input type="submit" name="acao" value="Logar">
    </form>
</body>
</html>
```
### criar panel.html com algum html "logado" 

### testar a rota login

### adicionar array de login
    var usuarios = [
        {
            login: 'geraldo',
            senha: '123',
        }
    ]

### fazer a rota de app.post, console.log verificar se está recuperando o login. se não add o res.send a pagina vai ficar no infinity loading 
    //so consegue usar o post devido ao body parser
    app.post('/admin/login',(req,res)=>{
        console.log(req.body.login)
        res.send('ok');
    })


#### app.post 

    app.post('/admin/login',(req,res)=>{
        console.log(req.body.login) //recupera login no console
        usuarios.map(function(val){
            //console.log(val.login)
        if(val.login == req.body.login && val.senha == req.body.senha){
                req.session.login = 'Geraldo';     
            
            }
        })
        //res.send('ok');
        res.redirect('/admin/login');
    })


# Extras:

#### Logoff  <a href="https://www.tabnine.com/code/javascript/functions/express-session/Session/destroy">refe</a>
    //for logout
    app.get('/logout',(req,res)=>{
        req.session.destroy(function (err) {
        res.redirect('/'); //Inside a callback… bulletproof!
        });
    })




