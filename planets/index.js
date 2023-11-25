import server from './src/server.js'

const PORT = 8003

server.listen(PORT, () => {
  console.log(`Planets service listening on port ${PORT}`)
})
