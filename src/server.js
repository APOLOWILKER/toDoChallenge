import http from 'node:http'
import { routes } from "./routes/routes.js"

const PORT = 3333

const server = http.createServer( (request, response) => {
  const {method, url} = request


  // para o mapeamento de rotas
  const route = routes.find(route => {
    console.log('route', route);
    return route.method === method && route.path === url

  });

  console.log('Server handler: ',route);

  if (route) {
    return route.handler(request, response)
  }

  return response.writeHead(404).end()
})

server.listen(PORT, () => {
  console.log(`Server is running... in port: ${PORT}`)
})
