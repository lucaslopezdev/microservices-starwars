export default (fn) => (req, res, next) => {
  fn(req, res).catch(err => next(err))
}