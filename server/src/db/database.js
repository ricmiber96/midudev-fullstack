const mongoose = require('mongoose')

const CONNECTION_URL = process.env.MONGO_DB_URI
mongoose.connect(CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(db => console.log('Db is connected', db.connection.host))
  .catch(err => console.error(err))

process.on('uncaughtException', () => {
  mongoose.connection.close()
})
