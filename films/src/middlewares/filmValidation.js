import { ClientError } from "../utils/errors/index.js";

export default (req, res, next) => {
  const { title } = req.body;
  if (title) return next()
  throw new ClientError('Falta el titulo', 400)
}