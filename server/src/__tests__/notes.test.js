const mongoose = require('mongoose')
const { server } = require('../server')
const Note = require('../models/note.model')
const { api, initialNotes, getAllContentFromNotes } = require('./helpers')

beforeEach(async () => {
  // await Note.deleteMany({})
  // const note1 = new Note(initialNotes[0])
  // await note1.save()

  // const note2 = new Note(initialNotes[1])
  // await note2.save()

  // const note3 = new Note(initialNotes[2])
  // await note3.save()

  // sequential method
  for (const note of initialNotes) {
    const noteObject = new Note(note)
    await noteObject.save()
  }
})

describe('GET all notes', () => {
  test('notes are returned as json', async () => {
    await api
      .get('/api/notes')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })

  test('DB size are initial notes length', async () => {
    const response = await api.get('/api/notes')
    expect(response.body).toHaveLength(initialNotes.length)
  })

  test('the first note is about midudev', async () => {
    const { contents } = await getAllContentFromNotes()
    expect(contents).toContain('Me tengo que suscribir a @midudev en YouTube')
  })

  test('a valid note can be created', async () => {
    const newNote = {
      content: 'Nueva nota creada',
      important: true
    }

    await api
      .post('/api/notes/')
      .send(newNote)
      .expect(200)
      .expect('Content-Type', /application\/json/)

    const { contents, response } = await getAllContentFromNotes()
    expect(response.body).toHaveLength(initialNotes.length + 1)
    expect(contents).toContain(newNote.content)
  })

  test('a note can be deleted', async () => {
    const { response: firstResponse } = await getAllContentFromNotes()
    const { body: notes } = firstResponse
    const noteToDelete = notes[0]

    await api
      .delete(`/api/notes/${noteToDelete.id}`)
      .expect(204)

    const { contents, response: secondResponse } = await getAllContentFromNotes()
    expect(secondResponse.body).toHaveLength(initialNotes.length - 1)
    expect(contents).not.toContain(noteToDelete.content)
  })

  test('a note that has an invalid id can not be deleted', async () => {
    await api
      .delete('/api/notes/1234')
      .expect(400)

    const { response } = await getAllContentFromNotes()
    expect(response.body).toHaveLength(initialNotes.length)
  })

  test('a note that has a valid id but do not exist can not be deleted', async () => {
    const validObjectIdThatDoNotExist = '60451827152dc22ad768f442'
    await api
      .delete(`/api/notes/${validObjectIdThatDoNotExist}`)
      .expect(404)

    const { response } = await getAllContentFromNotes()
    expect(response.body).toHaveLength(initialNotes.length)
  })

  afterAll(() => {
    mongoose.connection.close()
    server.close()
  })
})
