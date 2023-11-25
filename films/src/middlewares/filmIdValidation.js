import { ClientError } from '../utils/errors/index.js'

export default (req, res, next) => {
  const { id } = req.params
  if (id) return next();
  else throw new ClientError(`No existe un Film con el id ${id}`, 404);
}