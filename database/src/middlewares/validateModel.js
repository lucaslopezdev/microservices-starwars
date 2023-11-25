export default (req, res, next) => {
  const { model } = req.params;
  if(["Character", "Film", "Planet"].includes(model)) {
    return next()
  }
  throw new Error('Invalid model')
}