import axios from 'axios'
import response from '../utils/response.js'

export default async (req, res) => {
  const { id } = req.params
  const { data } = await axios.get(`http://database:8004/Character/${id}`)
  response(res, 200, data)
}
