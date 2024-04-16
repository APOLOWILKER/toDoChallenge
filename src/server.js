import http from 'node:http'
import { routes } from "./routes/routes.js"

const PORT = 3333

const server = http.createServer((request, response) => {
  console.log(`Request method: ${request.method} | Endpoint: ${request.url}`)

  const {method, url} = request
  // para o mapeamento de rotas
  const route = routes.find(route => {
    return route.method === method && route.path === url
  });
  console.log(route.handler);
  if (route) {
    return route.handler(request, response)
  }

  return response.writeHead(404).end('Hello Server Teve um erro')
})

server.listen(PORT, () => {
  console.log(`Server is running... in port: ${PORT}`)
})
