import server from './src/server.js'

const PORT = 8002

server.listen(PORT, () => {
  console.log(`Films service listening on port ${PORT}`)
})
