import fastify from 'fastify'

// chamando como uma função
const app = fastify()
//criando uma api
// api faz as requisições e devolve uma resposta , ouvindo uma url
app.listen({
  port:3333
  // then permite ouvir assim que o servidor terminar e quando terminar, execute uma função
}).then(()=>{
  console.log('🚀HTTP server running on htttp://localhost:3333')
})