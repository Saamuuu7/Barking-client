# Barking

Barking es una página web diseñada para que todos los usuarios puedan registrar sus bares favoritos y dejar comentarios sobre los bares almacenados en la base de datos, así como sobre aquellos bares que se añadan posteriormente.

## Características

- **Registro de Bares**: Los usuarios pueden añadir sus bares favoritos a la base de datos de Barking.
- **Comentarios**: Los usuarios pueden dejar comentarios sobre los bares ya almacenados y también sobre los nuevos bares que se vayan añadiendo.
- **Base de Datos Dinámica**: La base de datos de Barking se actualiza constantemente con las aportaciones de los usuarios.


|   HTTP VERB   |     PATH        | Request Body |                 Action              |
| ------------- | -------------   | -------------| ----------------------------------- |
| Post          | `/bars`         | JSON         | Create a new Project                |
| Get           | `/bars `        | {empty}      | Return all project                  |
| Get           | `/bars/:barsId `| {empty}      | Return all the specified project    |
| Put           | `/bars/:barsId` | JSON         | Edit the specified project          |
| Delete        | `/bars/:barsId` | {empty}      | Delete the specified project        |




|   HTTP VERB   |         PATH            | Request Body |             Action               |
| ------------- | ----------------------- | ------------ | -------------------------------  |
| Post          | `/comments `            | JSON         | Create a new Project             |
| Get           |` /comments `            | {empty}      | Return all project               |
| Get           | `/comments/:commentsId `| {empty}      | Return all the specified project |
| Put           | `/comments/:commentsId `| JSON         | Edit the specified project       |
| Delete        | `/comments/:commentsId `| {empty}      | Delete the specified project     |



ROUTES - CLIENT

|   DESCRIPTION     |           PATH          | 
| ----------------  | ----------------------- |
| home page         | `/`                     | 
| all bar page      |` /bars `                | 
| bar detail        | `/bar/:barId `          | 
| add new bar       | `/nuevo-bar `           | 
| all comments      | `/todos-los-comentarios`| 
| add comments      | `/nuevo-comentario`     | 
| edit comment page | `/editar-comentario`    |
| about us          | `/sobre-nosotros`       | 
