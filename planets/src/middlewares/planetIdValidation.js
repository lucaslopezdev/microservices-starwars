import { ClientError } from "../utils/errors/index.js"

export default (req, res, next) => {
  const { id } = req.params
  if( id) return next()
  throw new ClientError(`No se encontró un Planet con el id ${id}`, 404)
}