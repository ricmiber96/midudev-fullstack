const bcrypt = require('bcrypt')
const User = require('../models/user.model')
const { api, getUsers } = require('./helpers')
const mongoose = require('mongoose')
const { server } = require('../server')

describe('Creating a new user', () => {
  beforeEach(async () => {
    await User.deleteMany({})
    const passwordHash = await bcrypt.hash('pswd', 10)
    const user = new User({ username: 'joe', password: passwordHash })

    await user.save()
  })

  test('works as expected creating a new user', async () => {
    const usersAtStart = await getUsers()
    const newUser = {
      username: 'user test',
      name: 'new user',
      password: 'test password'
    }
    await api
      .post('/api/users')
      .send(newUser)
      .expect(200)
      .expect('Content-Type', /application\/json/)

    const usersAtEnd = await getUsers()
    expect(usersAtEnd.length).toHaveLength(usersAtStart.length + 1)

    const usernames = usersAtEnd.map(user => user.username)
    expect(usernames).toContain(newUser.username)
  })

  test('creation fails with a proper status code and message if user exist', async () => {
    const usersAtStart = await getUsers()
    const newUser = {
      username: 'user test',
      name: 'new user',
      password: 'test password'
    }
    await api
      .post('/api/users')
      .send(newUser)
      .expect(500)
      .expect('Content-Type', /application\/json/)

    expect(result.body.errors.username.message).toContain('`username` to be unique')
    const usersAtEnd = await getUsers()
    expect(usersAtEnd.length).toHaveLength(usersAtStart.length)
  })

  afterAll(() => {
    mongoose.connection.close()
    server.close()
  })
})
