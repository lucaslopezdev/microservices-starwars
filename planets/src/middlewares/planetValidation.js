import { ClientError } from "../utils/errors/index.js"

export default (req, res, next) => {
  const { name } = req.body
  if (name) return next()
  throw new ClientError('Falta el nombre', 401)
}