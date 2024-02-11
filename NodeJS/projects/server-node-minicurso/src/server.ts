import fastify from 'fastify'
import { memoriesRoutes } from './routes/memories'
import cors from '@fastify/cors'

const app = fastify()

app.register(cors, {
  origin: true, // todas URL de front-end poderão acessar o nosso back-end
  // origin: ['http://localhost:3333', 'http://rockeaseat.com.br'], // especificar as URL
})
app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('✨HTTP server running on http://localhost:3333')
  })
