## Minicurso NodeJS  Prima + Fastify + Typescript


- Projeto relacionado a este documentation nlw unite- favor deixar junto com esse repo!!

- [https://www.youtube.com/watch?v=W37Va1q9l-I](https://www.youtube.com/watch?v=W37Va1q9l-I)

## Ultis:

- `npx` - vem instalado com o node é uma forma de executar binario das depedencias instaladas

## Start Node project server:

- mkdir create a directory:
- cd <directory>
- use `code .` to open this `<directory in VSCODE>`
- start project: `npm init -y` -y para não fazer perguntas
- create a /src/server.js

Apenas o code abaixo vai gerar um erro de **import statement outside a module**

```js
import { createServer } from 'node:http'

const server = createServer(() => {
  console.log(`Hello`)
})

server.listen(3333)
```

open package.json e add `"type": "module"`

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

Another minimalist way read html file

```js
import { createServer } from 'node:http'
import { readFile } from 'node:fs'

// Read the HTML file

const home = readFile('index.html', 'utf-8', (err, data) => {
  if (err) {
    console.error('Error reading HTML file:', err)
    return
  }
  startServer(data)
})

console.log(home)

// Function to start the server
function startServer(htmlContent) {
  const server = createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end(htmlContent)
  })

  server.listen(5555, () => {
    console.log('Server is running on port 5555')
  })
}
```

## watch a file:

`node --watch .\server.js`

Disable ExperimentalWarning: `node --watch --no-warnings .\server.js`

## Custom npm

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

## Typescript

> node é o único que não entende Typescript por padrão.

- **typescript**

  - `npm i typescript -D`
  - `-D` significa que se trata de uma dependencia a ser usada somente em ambiente de desenvolvimento, que quando estiver no ar em produção, essa dependencia vai ser inútil, considerando que o Node não entende Typescript, é preciso converter o code para Javascript no momento que for fazer deploy do app. Resumindo o TS não vai ser útil em production

- **@types/node**

  - `npm i @types/node -D` oferece habilidade para o TS endender que está dentro de um projeto Node e assim endender algumas coisas Global como a variável process.
  - `npx tsc --init` - create `tsconfig.json`
  - Go to https://github.com/tsconfig/bases?tab=readme-ov-file choose Node version and copy configs to tsconfig.json or install it copy and paste in all `tsconfig.json`
  - Manual run!
  - now just add a `"include": ["src"]` where is .ts files, but de modo geral tudo que é .ts vai ser convervito para .js.
    - now convert .ts to .js with `npx tsc`
    - now run with node this .js file

- tsx

  - `npm i tsx -D` - como o Node não entende ts, o tsx automatiza de ts para js e roda.
  - if you don't have create a `src/server.ts`
  - run: `npx tsx src/server.ts` remember `run binary - what binary - path to file
  - run & watch: `npx tsx watch src/server.ts`

- npm custom

  - short command add in <ins>package.json:</ins> não precisa adicionar npx do inicio
    `"dev": "tsx ./src/server.ts"`
  - watch mode add in **package.json**:` "dev": "tsx watch ./src/server.ts"`

- single command install typescript, @types and tsx: `npm i typescript @types/node tsx -D`

## HTTPie install on Windows.

## REST Client

create a whatver.http or client.http to send methods, existem diversas opções para testar uma API


## HTTP Methods

- https://http.cat

### different methods of sending data in web requests

```js
// Sending Body Object:  When sending data in the body of a request,
// typically used in POST requests, you format the data as a JSON object.

{
id: 1
}


// Path Parameters
send path params: url.com/api/:id

// Query Parameters:
send router query params: `url.com?id=1`
They come after the `?` character in the URL and are separated by `&` if there are multiple parameters

```


## Prisma

- Mais sobre [Prisma here](https://www.youtube.com/watch?v=uApCW1gcpdE)

- install prima `npm i prisma -D` 
- `npx prisma init --datasource-provider SQLite`

- Prisma + SQLite [https://youtu.be/W37Va1q9l-I?t=1464](https://youtu.be/W37Va1q9l-I?t=1464) 


  - create data `npx prima init --datasource-provider SQLite` usar o SQL e instead o padrão que seria o PostgreSQL
  - install prima VSCode extension

- After set your schema.prisma
- `npx prisma migrate dev` // ler o scheme e detectar automaticamente as alterações
- `npx prima studio` - visualizar o `dev.db` vai abrir em `http://localhost:5555/`

- Acessar os dados
  - `npm i @prisma/client` - não é dependencia de desenvolvimento e sim de produção
  - **import { PrismaClient } from '@prisma/client'** em `server.ts`
    `npx prisma migrate reset`

Open HTTPie and `http://localhost:3333/memories`


## ENV - Manage environment variables

- Node 20+ ? [checkout built-in command](https://github.com/privatenumber/tsx/discussions/470)
- https://www.npmjs.com/package/dotenv#-install

```js
npm install dotenv

Create a `.env` file in the root of your project directory. This file will contain your environment variables in the format KEY=VALUE

import * as dotenv from 'dotenv';
dotenv.config();
console.log(process.env) // remove this after you've confirmed it is working


//👉 other way
import { config } from 'dotenv';
config();
const { NOME } = process.env

console.log(process.env.NOME)
console.log(NOME ===  'GERALDO')

```

## Framework: fastify

> microframework `npm i fastify`

`npm install fastify`

> example Routes

```js
import { fastify } from 'fastify'

const app = fastify()

app.get('/', () => {
  return 'Hello World'
})

app.get('/hello', () => {
  return 'Hello gmapdev'
})


//works but is out of date: server.listen(3333)

//new way:
app.listen({
  port: 3333,
})
```

- https://github.com/fastify/fastify-static/tree/master
- https://www.npmjs.com/package/@fastify/static


  - ## Static files

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

## fastify-type-provider-zod plugin

https://github.com/turkerdev/fastify-type-provider-zod

`npm install fastify-type-provider-zod`



# Cors

- `npm i @fastify/cors`


# zod
> library for validations, validação no request.body

- npm i zod


# postgres

- `npm install postgres`
  - https://github.com/porsager/postgres
- create a Neon acc
- `npm i dotenv -D`


# extentions

`min Theme` theme
`symbols` icones
`ESLint` - força a pradronização, busca por padrão no code eg: pontoVirgula
