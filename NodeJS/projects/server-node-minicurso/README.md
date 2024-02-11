# Minicurso NodeJS

- [https://www.youtube.com/watch?v=W37Va1q9l-I](https://www.youtube.com/watch?v=W37Va1q9l-I)

- start project: `npm init -y`
- Install Typescript as dependencia de desenvolvimento:
  - `npm i typescript -D`
  - `npm i @types/node -D` -D significa que se trata de uma dependencia a ser usada somente em ambiente de desenvolvimento, que quando estiver no ar em produção, essa dependencia vai ser inútil, considerando que o Node não entende Typescript, é preciso converter o code para Javascript no momento que for fazer deploy do app. Resumindo o TS não vai ser útil em production
- `npm i @types/node -D` - oferece habilidade para o TS endender que está dentro de um projeto Node e assim endender algumas coisas Global como a variável process.
- `npx` - forma de executar binario
- `npx tsc --init` - create `tsconfig.json`
- `npm i tsx -D` - Como o Node não entende ts, automatiza de ts para js e rodar.

- create a `src/server.ts`
- run: `npx tsx src/server.ts`
- short command add in <ins>package.json:</ins> `"dev": "tsx ./src/server.ts"`
- watch mode add in **package.json**:` "dev": "tsx watch ./src/server.ts"`
- Install fastify `npm i fastify`

### HTTPie - search on

### Prisma

- install prima `npm i prisma -D` - Prisma + SQLite [https://youtu.be/W37Va1q9l-I?t=1464](https://youtu.be/W37Va1q9l-I?t=1464) - Mais sobre [Prisma here](https://www.youtube.com/watch?v=uApCW1gcpdE)

  - create data `npx prima init --datasource-provider SQLite` usar o SQL e instead o padrão que seria o PostgreSQL
  - install prima VSCode extension

- `npx prisma migrate dev` // ler o scheme e detectar automaticamente as alterações
- `npx prima studio` - visualizar o `dev.db` vai abrir em http://localhost:5555/

- Acessar os dados
  - `npm i @prisma/client` - não é dependencia de desenvolvimento e sim de produção
  - **import { PrismaClient } from '@prisma/client'** em server.ts
    `npx prisma migrate reset`

Open HTTPie and `http://localhost:3333/memories`

### Cors

- `npm i @fastify/cors`

ESLint - força a pradronização
