# NodeJS

> > O Node.js é um ambiente de execução Javascript server-side

Instalar o `NodeJS` na sua máquina [https://nodejs.org/pt-br/download/](https://nodejs.org/pt-br/download/)

# Saindo do Zero em Node.JS
 
- Extends example in Api Node, Postgress, Fastify  https://github.com/geraldotech/nodeZero


```js
checkout version node and node package manager
$ node -v

$ npm -v
```

### create sample server server v1:

> chooice your port!

```js
const http = require('http')
const hostname = '127.0.0.1'
const port = 3000
const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello Dev') //simples texto
})

server.listen(port, hostname, () => {
  console.log('server is running!')
})
```

### create sample server v2:

> > > versão sem Content-Type lite

```js
const http = require('http')

const hostname = '127.0.0.1'
const port = 4000
const server = http.createServer((req, res) => {
  res.end('Hello Dev') //simples texto
})

server.listen(port, hostname, () => {
  console.log('server running in port :4000')
})
```

run: `node index.js`

Open browser: `http://localhost:3000`

### open cdm in folder of project:

    $ node index.js

### Write and read html files

1. add `const fs = require('fs');`
2. Create `index.html` and add a sample html code
3. Add code:

```js
  fs.readFile('index.html',function(err,data){
        res.writeHead(200,{'Content-type':'text-html'});
        res.write(data);
        return res.end();
    })
})
```

Arquivo final:

```js
const http = require('http')
const fs = require('fs') //new permite manipular arquivos usando node
const hostname = '127.0.0.1'
const port = 3000
const server = http.createServer((req, res) => {
  fs.readFile('index.html', function (err, data) {
    res.writeHead(200, { 'Content-type': 'text-html' })
    res.write(data)
    return res.end()
  })
})

server.listen(port, hostname, () => {
  console.log('server is running!')
})
```

## About req

> adicionar dentro da const server =

1. Display várias informações da requisição:
   `console.log(req)`

2. headers refer (sabe a página que o user esta acessando mesmo que não existe):  
   `console.log(req.headers)`

### Fazer rotas fazendo validações baseado no req.url em página:

Apenas `localhost/smart` vai funcionar o mesmo vai ficar carregando infinitamente.

```js
 if(req.url == '/smart'){
    ...fs.read.file....
 }
```

adicionar else para parar o carregamento infitinto, vai retornar uma página em branca

```js
} else {
    return res.end();
}
```

### Deixe only '/' para root http://localhost

```js
  if(req.url == '/'){
```

### if/else para pagina 404.html

1. Criar `404.html`
2. Apenas copiar o conteudo de if e jogar para else:

### código completo

<details>
<summary>code</summary>

```js
const http = require('http')
const fs = require('fs')
const hostname = '127.0.0.1'
const port = 4000

const server = http.createServer((req, res) => {
  if (req.url == '/smart') {
    fs.readFile('index.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.write(data)
      return res.end()
    })
  } else {
    fs.readFile('404.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.write(data)
      return res.end()
    })
  }
})

server.listen(port, hostname, () => {
  console.log('server running in port :4000')
})
```

</details>

### example render a txt file

<details>
<summary>code</summary>

```js
const http = require('http')
const fs = require('fs')
const hostname = '127.0.0.1'
const port = 4000

const server = http.createServer((req, res) => {
  if (req.url == '/') {
    fs.readFile('index.html', function (err, data) {
      fs.appendFile('file.txt', '\n novo access from url', (err) => {
        if (err) throw err
        console.log('novo acesso! ')
      })

      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.write(data)
      return res.end()
    })
  } else if (req.url == '/read') {
    //    res.end('ok');

    fs.readFile('geraldo.txt', function (err, data) {
      res.end(data.toString())
      //toString() buffer converte para String
    })
  } else {
    fs.readFile('404.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.write(data)
      return res.end()
    })
  }
})

server.listen(port, hostname, () => {
  console.log('server running in port :4000')
})
```

</details>

### code if else res

<details>
<summary>code</summary>

```js
const http = require('http')
const fs = require('fs') //new permite manipular arquivos usando node

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
  if (req.url == '/') {
    fs.readFile('index.html', function (err, data) {
      res.writeHead(200, { 'Content-type': 'text-html' })
      res.write(data)
      return res.end()
    })
  } else {
    return res.end()
  }
})

server.listen(port, hostname, () => {
  console.log('server is running!')
})
```

</details>

### if else-if-page native by GP

<details>
<summary>Display</summary>

```js
const http = require('http')
const fs = require('fs')
const hostname = '127.0.0.1'
const port = 4000

const server = http.createServer((req, res) => {
  if (req.url == '/') {
    fs.readFile('index.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.write(data)
      return res.end()
    })
  } else if (req.url == '/page') {
    fs.readFile('oi.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.write(data)
      return res.end()
    })
  } else if (req.url == '/work') {
    fs.readFile('work.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.write(data)
      return res.end()
    })
  } else if (req.url == '/msn') {
    res.end('Hello Dev')
  } else {
    fs.readFile('404.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.write(data)
      return res.end()
    })
  }
})

server.listen(port, hostname, () => {
  console.log('server running in port :4000')
})
```

</details>

### example interval 2s salve as script.js and run: node script.js

> > > Mostra a soma a cada 2s

```js
function somar(n1, n2) {
  console.log(n1 + n2)
}
setInterval(function () {
  somar(5, 6)
}, 2000)
```

# Nodemon

[nodemon](https://www.npmjs.com/package/nodemon)
automatically restarting the node application when file changes in the directory are detected.

1. run command line:

```js
$ npm install -g nodemon

```

run live watch:

```js
$ nodemon .\index.js
```

