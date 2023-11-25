import axios from 'axios'
import response from '../utils/response.js'

export default async (req, res) => {
  const {data} = await axios.post('http://database:8004/Film', req.body)
  response(res, 201, data)
}
