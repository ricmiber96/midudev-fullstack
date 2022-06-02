const bcrypt = require('bcrypt')
const User = require('../models/user.model')

const getUsers = async (req, res) => {
  try {
    const users = await User.find({}).populate('note', {
      content: 1,
      date: 1
    })
    res.status(200)
    res.json(users)
  } catch (err) { console.error(err) }
}

const createUser = async (req, res) => {
  const { username, name, password } = req.body

  const saltRounds = 10
  const passwordHash = await bcrypt.hash(password, saltRounds)

  try {
    const newUser = await User.create({
      username,
      name,
      passwordHash
    })
    res.status(201).json(newUser)
  } catch (error) {
    res.status(400)
    res.json(error)
  }
}

module.exports = {
  getUsers,
  createUser
}
