import express, { json } from 'express'
import router from './routes/index.js'
import morgan from 'morgan'

const server = express()

server.use(morgan('dev'))
server.use(json())
server.use('/characters', router)

server.use('*', (req, res) => {
  res.status(404).send('Not Found')
})

server.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    error: true,
    message: err.message
  })
})

export default server