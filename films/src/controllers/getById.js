import response from '../utils/response.js'
import axios from 'axios';

export default async (req, res) => {
  const { id } = req.params;
  const {data} = await axios.get(`http://database:8004/Film/${id}`)
  response(res, 200, data)
}