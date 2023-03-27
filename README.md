# Correr aplicacion en local

Este proyecto fue desarrollado para una prueba tecnica de la empresa Kuepa

## Scripts disponibles

Esta aplicación fue desarrollada con contenedores de Docker, por lo cual se pueden correr los comandos:
- make-up
- make-down

### Seguir los siguientes pasos
1.- Clonar proyecto del repositorio https://github.com/greidykth/chta_classes_virtuales
2.- Dentro de la carpeta del proyecto correr make-up para levantar los contenedores
3.- Registrar usuarios estudiantes y moderador
4.- Enviar mensajes dentro del chat

***Problemas comunes***
Si no se establece correctamente la conexión entre el contenedor del backend y la base de datos, se puede intentar:

Ir a chat_clases_virtuales/projects/backend/src/database/database.js
usar host:"localhost"
Intentar correr, en caso de no tener éxito, volver a colocar  host: "mysql"