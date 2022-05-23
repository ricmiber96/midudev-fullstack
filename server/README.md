# NodeJS Server Fullstack Bootcamp

Este es el servidor desarrollado durante las clases del bootcamp de Midudev
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