require('dotenv').config()
require('./db/database')
const express = require('express')
const cors = require('cors')
const path = require('node:path')
const logger = require('./middleware/loggerMiddleware')
const apiLimit = require('./middleware/requestLimit')
const app = express()
const Note = require('./models/note.model')
const notFound = require('./middleware/notFound')
const handleErrors = require('./middleware/handleErrors')
const usersRouter = require('./controllers/users.routes')
app.use(cors())
app.use(express.json())
// app.use(apiLimit)
app.use('/images', express.static(path.join(__dirname, '/images')))
app.use(logger)

// API ROUTES
app.get('/', (req, res) => {
  res.send('Hello world!')
})

// app.use('/api/users', usersRouter)

app.get('/api/notes', (req, res) => {
  Note.find({})
    .then(notes => {
      res.json(notes)
    })
    .catch(err => { console.error(err) })
})

app.get('/api/notes/:id', (req, res, next) => {
  const id = req.params.id
  Note.findById(id)
    .then(note => {
      if (note) {
        return res.json(note)
      } else {
        res.status(404).end()
      }
    })
    .catch(err => {
      next(err)
    })
})

app.post('/api/notes', (req, res) => {
  const note = req.body
  if (!note || !note.content) {
    return res.status(400).json({
      message: 'Content Note is required'
    })
  }
  const newNote = new Note({
    content: note.content,
    date: new Date(),
    important: note.important || false
  })
  newNote.save()
    .then(saveNote => res.json(saveNote))
    .catch(err => res.status(400).json(err))
})

app.put('/api/notes/:id', (req, res, next) => {
  const id = req.params.id
  const note = req.body
  const newNoteInfo = {
    content: note.content,
    important: note.important
  }
  Note.findByIdAndUpdate(id, newNoteInfo, { new: true })
    .then(result => {
      res.json(result)
    })
})

app.delete('/api/notes/:id', (req, res, next) => {
  const id = req.params.id
  Note.findByIdAndDelete(id)
    .then(() => {
      res.status(204).end()
    })
    .catch(err => next(err))
})

app.use(notFound)
app.use(handleErrors)

const PORT = process.env.PORT || 5001
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

module.exports = { app, server }
