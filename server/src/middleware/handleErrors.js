module.exports = (error, req, res, next) => {
  console.error(error)
  if (error.name === 'CastError') {
    res.status(400).send({ error: 'id is not correct' })
  } else {
    res.status(500).end()
  }
}