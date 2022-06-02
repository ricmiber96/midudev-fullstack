
const express = require('express')
const { getUsers, createUser } = require('../controllers/users.controller')

const userRouter = express.Router()

userRouter.get('/api/users', getUsers)
userRouter.post('/api/users', createUser)
// userRouter.get('/api/users/:id', getUserById)
// userRouter.put('/api/users/:id', updateUser)
// userRouter.delete('/api/users/:id', deleteUser)

module.exports = userRouter
