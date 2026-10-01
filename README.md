# API de Libros con Node.js y Express

API REST para gestionar una colección de libros con CRUD completo. Los datos se guardan en un archivo JSON local/ datos quemados (`bd.json`), sin necesidad de base de datos.


## Tecnologías

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- body-parser
- nodemon (opcional, para desarrollo)
- Módulo `fs` de Node para leer y escribir `bd.json`

## Requisitos

- Node.js instalado (versión 18 o superior )
- npm

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/Victoriacarcat/Node.js-API.git
   cd Node.js-API
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Inicia el servidor:

   ```bash
   node index.js
   ```

   O, si tienes `nodemon`, para que se reinicie solo al guardar cambios:

   ```bash
   npx nodemon index.js
   ```

El servidor queda disponible en `http://localhost:3000`.

## Estructura del proyecto

```
nodejs-api/
├── bd.json          # "Base de datos" con los libros
├── index.js         # Servidor y endpoints
├── request.http     # Peticiones de prueba (extensión REST Client)
├── package.json
└── .gitignore
```

## Estructura de los datos

`bd.json` tiene esta forma:

```json
{
  "libros": [
    {
      "id": 1,
      "nombre": "Los 7 hábitos de la gente altamente efectiva",
      "autor": "Stephen R. Covey",
      "fechaPub": 1989
    },
    {
      "id": 2,
      "nombre": "Padre rico, padre pobre",
      "autor": "Robert Kiyosaki",
      "fechaPub": 1997
    }
  ]
}
```

| Campo      | Tipo   | Descripción                              |
| ---------- | ------ | ---------------------------------------- |
| `id`       | número | Identificador (se asigna automáticamente) |
| `nombre`   | texto  | Título del libro                         |
| `autor`    | texto  | Autor del libro                          |
| `fechaPub` | número | Año de publicación                       |

## Endpoints

| Método | Ruta           | Descripción                    |
| ------ | -------------- | ------------------------------ |
| GET    | `/`            | Mensaje de bienvenida          |
| GET    | `/libros`      | Obtiene todos los libros       |
| GET    | `/libros/:id`  | Obtiene un libro por su id     |
| POST   | `/libros`      | Crea un nuevo libro            |
| PUT    | `/libros/:id`  | Actualiza un libro existente   |
| DELETE | `/libros/:id`  | Elimina un libro               |

### Ejemplos

**Crear un libro** (`POST /libros`)

```http
POST http://localhost:3000/libros
Content-Type: application/json

{
  "nombre": "Una breve historia del tiempo",
  "autor": "Stephen Hawking",
  "fechaPub": 1988
}
```

**Actualizar un libro** (`PUT /libros/3`)

```http
PUT http://localhost:3000/libros/3
Content-Type: application/json

{
  "fechaPub": 1989
}
```

**Eliminar un libro** (`DELETE /libros/3`)

```http
DELETE http://localhost:3000/libros/3
```

## Probar la API
Se puede usar el archivo `request.http` con la extensión [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) de VS Code: abrir el archivo y haz clic en **Send Request** sobre cada petición. También sirven Postman, Insomnia o `curl`.

## Autores

Victoria Cardenas y Samantha Fraile
