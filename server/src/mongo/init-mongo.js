db = db.getSiblingDB('notesDB')
db.createCollection('notes')

db.notes.insertMany([
  {
    content: 'Me tengo que suscribir a @midudev en YouTube',
    date: '2019-05-30T17:30:31.098Z',
    important: true
  },
  {
    content: 'Tengo que estudiar las clases del FullStack Bootcamp',
    date: '2019-05-30T18:39:34.091Z',
    important: false
  },
  {
    content: 'Repasar los retos de JS de midudev',
    date: '2019-05-30T19:20:14.298Z',
    important: true
  }
])
