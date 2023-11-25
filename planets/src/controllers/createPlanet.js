import axios from 'axios'
import response from '../utils/response.js'

export default async (req, res) => {
  const { data } = await axios.post('http://database:8004/Planet', req.body)
  response(res, 201, data)
}