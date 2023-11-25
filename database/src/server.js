import express, { json } from 'express'
import morgan from 'morgan'
import router from './routes/index.js'

const server = express()

server.use(json())
server.use(morgan('dev'))
server.use(router)

export default server