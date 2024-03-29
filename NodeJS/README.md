# NodeJS

> > O Node.js é um ambiente de execução Javascript server-side

Instalar o `NodeJS` na sua máquina [https://nodejs.org/pt-br/download/](https://nodejs.org/pt-br/download/)

```js
checkout version node and node package manager
$ node -v

$ npm -v
```

### create package.json do project:

    $ npm init

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

Now call in cmd: `node index.js`

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

# Saindo do Zero em Node.JS

- Extends example in Api Node, Postgress, Fastify  https://github.com/geraldotech/nodeZero

- mkdir create a directory:
- cd <directory>
- Use `code .` to open this `<directory in VSCODE>`

## extentions

`min Theme` theme
`symbols` icones
`ESLint` - busca por padrão no code eg: pontoVirgula

Apenas o code abaixo vai gerar um erro de **import statement outside a module**

```js
import { createServer } from 'node:http'

const server = createServer(() => {
  console.log(`Hello`)
})

server.listen(3333)
```

Create a package.json: `npm init -y` and add: `"type": "module",`

- Now run: `node server.js`
  no browser não vai carregar nada, porém observer a mensagem do console no terminal

```js
import { createServer } from 'node:http'

const server = createServer((resquest, response) => {
  console.log(`Hello`)

  response.write('Oi') //escreve a msn na tela
  return response.end() //finaliza a requisicao, evitando o loop
})

server.listen(3333)
```

## watch a file:

`node --watch .\server.js`

Disable ExperimentalWarning: `node --watch --no-warnings .\server.js`

## Custom commando

Open package.json > scripts and add:
` "dev": "node --watch --no-warnings server.js"`

Final package file:

```js
{
...
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js",
    "dev": "node --watch --no-warnings server.js"
  },
....
}
```

Now just run: `npm run dev` e concluimos a criação do servidor http nativo sem framework

# Framework: fastify

`npm install fastify`

> example Routes

```js
import { fastify } from 'fastify'

const server = fastify()

server.get('/', () => {
  return 'Hello World'
})

server.get('/hello', () => {
  return 'Hello gmapdev'
})

server.get('/node', () => {
  return 'Hello gmapdev'
})

//works but is out of date: server.listen(3333)

//new way:
server.listen({
  port: 3333,
})
```

###

- https://github.com/fastify/fastify-static/tree/master
- https://www.npmjs.com/package/@fastify/static

### Static files

<details>
<summary>Get example</summary>

```js
import { fastify } from 'fastify'

import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const path = require('path')

import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
//import { DatabaseMemory } from './database-memory.js'
import { DatabasePostgres } from './database-postgres.js'

const server = fastify()

//const database = new DatabaseMemory()

const database = new DatabasePostgres()

// POST localhost:3333/videos
// PUT localhost:3333/videos/1

server.post('/videos', async (request, reply) => {
  const { title, description, duration } = request.body

  await database.create({
    /*  title: title,
    description: description,
    duration: duration, */
    title,
    description,
    duration,
  })

  //console.log(database.list())

  return reply.status(201).send()
})

const fastifyStatic = require('@fastify/static')

server.register(fastifyStatic, {
  root: path.join(__dirname, 'public'),
  prefix: '/public/',
  constraints: { host: 'example.com' },
})

server.get('/', (req, reply) => {
  reply.sendFile('index.html')
})

server.get('/videos', async (request) => {
  const search = request.query.search

  //console.log(search)
  const videos = await database.list(search)
  //console.log(videos)
  return videos
})

// Route Parameters

server.put('/videos/:id', async (request, reply) => {
  const videoid = request.params.id
  const { title, description, duration } = request.body

  await database.update(videoid, {
    title,
    description,
    duration,
  })
  return reply.status(204).send()
})

server.delete('/videos/:id', async (request, reply) => {
  const videoid = request.params.id

  await database.delete(videoid)

  return reply.status(204).send()
})

server.listen({
  host: '0.0.0.0',
  port: process.env.POST ?? 3333,
})
```

</details>

- `npm install postgres`
  - https://github.com/porsager/postgres
- create a Neon acc
- `npm i dotenv -D`
