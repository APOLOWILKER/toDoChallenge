import http from 'node:http'
import { routes } from "./routes/routes.js"

const PORT = 3333

const server = http.createServer((request, response) => {
  console.log(`Request method: ${request.method} | Endpoint: ${request.url}`)

  const {method, url} = request
  // para o mapeamento de rotas
  const route = routes.find((routeObject) => {
    routeObject.path === url &&
    routeObject.method === method
  })

  if (route) {
    route.handler(request, response)
  } else {
    return response.writeHead(404).end('Erro na Aplicação')
  }

  return response.end('Hello Server')
})

server.listen(PORT, () => {
  console.log(`Server is running... in port: ${PORT}`)
})
