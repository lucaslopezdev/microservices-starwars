import express, { json } from 'express'
import morgan from 'morgan'
import router from './routes/index.js'

const server = express()

server.use(morgan('dev'))
server.use(json())
server.use('/planets' ,router)

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