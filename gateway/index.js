import express from 'express'
import morgan from 'morgan'
import { createProxyMiddleware } from 'http-proxy-middleware'

const app = express()
app.use(morgan('dev'))

app.use('/characters', createProxyMiddleware({
  target: 'http://characters:8001', // La url donde tenemos el microservicio
  changeOrigin: true // Indicarle que a partir de aca, la request va a continuar a este microservicio
}))

app.use('/films', createProxyMiddleware({
  target: 'http://films:8002',
  changeOrigin: true
}))

app.use('/planets', createProxyMiddleware({
  target: 'http://planets:8003',
  changeOrigin: true
}))

app.use('/database', createProxyMiddleware({
  target: 'http://database:8004',
  changeOrigin: true
}))

app.listen(8000, () => {
  console.log('Gateway on port 8000');
})