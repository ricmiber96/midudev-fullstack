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
    npm install Eslint -D
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
# Aprendiendo Mongoose
[Link Video](https://www.youtube.com/watch?v=vhUw7GkRHdk&list=PLV8x_i1fqBw0Kn_fBIZTa3wS_VZAqddX7&index=9)