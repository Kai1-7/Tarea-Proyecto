# Plataforma de Redes Sociales API

Esta es una API RESTful para una plataforma de redes sociales donde los usuarios pueden crear perfiles, seguir a amigos, compartir publicaciones, actualizar su biografía y eliminar cuentas.

## Rutas y Métodos

1. Crear un UsuarioRuta:** `POST /users`
Descripción:** Crea un nuevo usuario.
Cuerpo de la solicitud:
  ```json
  {
    "id": "1",
    "name": "John Doe",
    "bio": "Desarrollador web"
  }

Respuesta exitosa:

{
  "message": "Usuario creado"
}
Respuesta de error (si el usuario ya existe):

{
  "message": "Usuario ya existe"
}






2. Obtener Información de un Usuario
Ruta: GET /users/:id

Respuesta exitosa:

{
  "id": "1",
  "name": "John Doe",
  "bio": "Desarrollador web",
  "following": []
}
Respuesta de error (si el usuario no se encuentra):

{
  "message": "Usuario no encontrado"
}




3. Actualizar la Biografía de un Usuario
Ruta: PUT /users/:id/bio

Cuerpo de la solicitud:

{
  "bio": "Desarrollador full stack"
}
Respuesta exitosa:

{
  "message": "Biografía actualizada"
}



4. Eliminar un Usuario
Ruta: DELETE /users/:id

Respuesta exitosa:

{
  "message": "Usuario eliminado"
}




5. Crear una Publicación
Ruta: POST /posts

Cuerpo de la solicitud:

{
  "id": "101",
  "userId": "1",
  "content": "¡Este es mi primer post!"
}
Respuesta exitosa:

{
  "message": "Publicación creada"
}



6. Obtener Publicaciones de un Usuario
Ruta: GET /users/:id/posts

Respuesta exitosa:

[
  {
    "id": "101",
    "userId": "1",
    "content": "¡Este es mi primer post!"
  }
]



7. Eliminar una Publicación
Ruta: DELETE /posts/:id

Respuesta exitosa:

{
  "message": "Publicación eliminada"
}




8. Seguir a Otro Usuario
Ruta: POST /users/:id/follow

Cuerpo de la solicitud:

{
  "targetId": "2"
}
Respuesta exitosa:

{
  "message": "Ahora sigues a NombreDelUsuario"
}




Instrucciones para Probar la API
Clona este repositorio en tu máquina local:


git clone https://github.com/tu_usuario/nombre_repositorio.git
Navega al directorio del proyecto:


cd nombre_repositorio
Instala las dependencias necesarias:


npm install
Inicia el servidor:


npm start
La API estará disponible en http://localhost:3000.








Pruebas con Postman
Puedes probar todas las rutas de esta API utilizando Postman el cual yo utilice.

Ejemplo de pruebas con Postman:


1. Crear un Usuario (POST)
URL: http://localhost:3000/users
Método: POST
Cuerpo:

{
  "id": "1",
  "name": "John Doe",
  "bio": "Desarrollador web"
}


2. Obtener Información de un Usuario (GET)
URL: http://localhost:3000/users/1
Método: GET


3. Actualizar Biografía (PUT)
URL: http://localhost:3000/users/1/bio
Método: PUT
Cuerpo:
{
  "bio": "Desarrollador full stack"
}


4. Eliminar un Usuario (DELETE)
URL: http://localhost:3000/users/1
Método: DELETE


5. Crear una Publicación (POST)
URL: http://localhost:3000/users/1/posts
Método: POST
Cuerpo:
{
  "id": "101",
  "userId": "1",
  "content": "¡Este es mi primer post!"
}


6. Obtener Publicaciones de un Usuario (GET)
URL: http://localhost:3000/users/1/posts
Método: GET


7. Eliminar una Publicación (DELETE)
URL: http://localhost:3000/posts/101
Método: DELETE


8. Seguir a Otro Usuario (POST)
URL: http://localhost:3000/users/1/follow
Método: POST
Cuerpo:
{
  "targetId": "2"
}