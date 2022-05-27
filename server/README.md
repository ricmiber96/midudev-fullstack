# NodeJS Server Fullstack Bootcamp

Este es el servidor desarrollado durante las clases del bootcamp fullstack de Midudev
 - [Midudev github profile](https://github.com/midudev)
 - [Repositorio NodeJS Server Fullstack Bootcamp](https://github.com/midudev)

# Clases

## Primera Clase
[Link Video](https://www.youtube.com/watch?v=o85OkeVtm7k&list=PLV8x_i1fqBw0Kn_fBIZTa3wS_VZAqddX7&index=7)
 - Creacion del servidor con NodeJS
 - Instalacion de librerias (Express y Nodemon)
 - Creacion de nuestras primeras rutas dentro del servidor
 - Documentacion de nuestra API en Postman
## Segunda Clase
[Link Video](https://www.youtube.com/watch?v=ep_plUeKV1Y&list=PLV8x_i1fqBw0Kn_fBIZTa3wS_VZAqddX7&index=10)
 - Instalacion de Eslint en el proyecto
    ```
    npm install eslint -D
    &&
    npm init @eslint/config
    ```    
 - Creación de Middlewares
 - Problemas con Cors
    ```
    npm install cors -E
    app.use(cors())
    ```
  * Deploy Api en Heroku con Heroku CLI
    * Cambiar el puerto del servidor
    ```
    heroku create --region eu nombre-app
    ```
    * Si existe la aplicacion añadir la rama heroku para hacer el deploy
    ```
    heroku git:remote -a salty-depths-78774
    &&
    git push heroku main
    ```
    *(Deploy desde otra rama que no sea main)
    ```
    git push heroku nombre_rama:main
    ```
## Tercera Clase
[Link Video](https://www.youtube.com/watch?v=HsYA3QvWGlk&list=PLV8x_i1fqBw0Kn_fBIZTa3wS_VZAqddX7&index=8)
 - Creación del clueter en MongoDB Atlas
 - Conexion a la base de datos con el cliente Robo 3T
 - Creacion de una base de datos de ejemplo

    ```
    use mydatabase
    db.createCollection('posts')
    db.posts.insert({
        id: 2,
        name: "First Post",
        img: "http://instagram.com",
        likes: [{
            @joe: 1,
            @doe: 1,
        }],
        user:"midudev"
    })
    db.posts.find({})
    db.posts.find({user: "midudev"})
    ```
 - Ejemplo de actualizacion de un documento con set
    ```
    db.post.update({user: "midudev"},{
        $set: {
            name: 'Este es el primer post'
        }
    })
    ```
### Mongoose
[Link Video](https://www.youtube.com/watch?v=vhUw7GkRHdk&list=PLV8x_i1fqBw0Kn_fBIZTa3wS_VZAqddX7&index=9)
 - Instalacion de mongoose en nuestro proyecto
 - Creacion de Schemas y Modelos con mongoose
```
const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean
})

const Note = mongoose.model('Note', noteSchema)

Note.find({})
  .then(result => {
    console.log(result)
    mongoose.connection.close()
  })
  .catch(err => console.error(err))

const note = new Note({
  content: 'MongoDB example',
  date: new Date(),
  important: true
})

note.save()
  .then(result => {
    console.log(result)
    mongoose.connection.close()
  })
  .catch(err => { console.error(err) })
```
- Quitar el _id y __v de la respuesta JSON en el Note Model
- Como usar variables de entorno .env (Nota: tienes que crear el archivo en la raiz del proyecto)
- Conectando la peticion POST a nuestra BD
- Conectando la peticion GET by ID a nuestra BD
- Usando middlewares para manejar errores
- Integrando Sentry.io para manejo de errores
- Sirviendo estaticos con Express
- Uso del middleware express-rate-limit para limitar el numero de peticiones por IP

## Cuarta Clase
### Iniciacion al Testing
[Link Video](https://www.youtube.com/watch?v=_DzBez4qMi0&list=PLV8x_i1fqBw0Kn_fBIZTa3wS_VZAqddX7&index=10)
- Creando nuestros propios tests runner
- Ejemplos de framework testing:
    1. [Mocha](https://mochajs.org/)
    2. [Ava](https://github.com/avajs/ava)
    3. [Jest](https://jestjs.io/es-ES/)
- Instalamos Jest en nuestro proyecto
```
npm install jest -D
```
- Añadimos la configuracion de Jest a nuestro package.json
```
  "jest": {
    "testEnvironment": "node"
  }
```
- Añadimos en la configuracion de Eslint en nuestro package.json la opcion 'env' 
```
"eslintConfig": {
    "extends": "./node_modules/standard/eslintrc.json",
    "env":{
      "jest": true,
    }
}
```
### Testing de Backend Con Jest
[Link Video](https://www.youtube.com/watch?v=_xxVJdGNMrs&list=PLV8x_i1fqBw0Kn_fBIZTa3wS_VZAqddX7&index=12)
- Usar supertest para hacer testing en express
```
npm i supertest -D 
```
  - Ejemplo:
  ```
  const supertest = require('supertest')
  const app = require('../server')

  const api = supertest(app)

  test('notes are returned as json', async () => {
    await api
      .get('/api/notes')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })
  ```
- Hacer watch de los test con script en el package.json
- Uso de skip para saltarnos algunos test
- Evitar Side Effects en los test
- Ejecutar test segun su nombre o solo ejecutar los test de un fichero
- Testing POST requests
- Refactorizando el codigo con helpers 

## Quinta Clase 
### Creacion de Usuarios y securizar nuesta BD

