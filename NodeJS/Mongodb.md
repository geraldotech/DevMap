# mongodb


### dependece to mongodb

    npm install mongoose

### add require in index.js 

    const mongoose = require('mongoose')  

create your collections to database

### connect to database

    mongoose.connect('mongodb+srv://<userhere>:<password>@cluster0.tynvf.mongodb.net/<mydatabase>?retryWrites=true&w=majority',{useNewUrlParser:true, useUnifiedTopology: true}).then(function(){
    console.log('conectado com sucesso!');
}).catch(function(err){
    console.log(error.message);
})


### basic to get content from mongodb
```js
app.get('/',(req,res) => {
  if(req.query.busca == null){
     Posts.find({}).sort({'_id': -1}).exec(function(err,posts){
            console.log(posts[0]);
            res.render('home',{posts:posts})
        })    
        
    }else {
        res.render('busca',{});
    }
    
});
```

### Snippet selecionando as mais lidas:
```js
Posts.find({}).sort({'views': -1}).limit(3).exec(function(err,postsTop){

                // console.log(posts[0]);

                 postsTop = postsTop.map(function(val){

                         return {

                             titulo: val.titulo,
                             conteudo: val.conteudo,
                             descricaoCurta: val.conteudo.substr(0,100),
                             imagem: val.imagem,
                             slug: val.slug,
                             categoria: val.categoria,
                             views: val.views
                             

                         }                 })               



                 res.render('home',{posts:posts,postsTop:postsTop});
                

             })
```