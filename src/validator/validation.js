module.exports = schema => (req, res, next) => {
  const { error } = schema.validate(req, {
    abortEarly: false,
  })

  if (error) {
    res.status(422).send({
      type: error.name,
      message: error.details[0].message,
    })
  } else {
    next()
  }
}
