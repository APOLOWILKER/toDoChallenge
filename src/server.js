import http from 'node:http'

const PORT = 3333

const server = http.createServer((request, response) => {
  return response.end('Hello Server')
})

server.listen(PORT, () => {
  console.log(`Server is running... in port: ${PORT}`)
})
