const mongoose = require('mongoose')
const { MONGO_DB_URI, MONGO_DB_URI_TEST, NODE_ENV } = process.env

// const CONNECTION_URL = NODE_ENV === 'test' ? MONGO_DB_URI_TEST : MONGO_DB_URI

const CONNECTION_URL = MONGO_DB_URI
mongoose.connect(CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(db => console.log('Db is connected', db.connection.name))
  .catch(err => console.error(err))

process.on('uncaughtException', () => {
  mongoose.connection.close()
})
