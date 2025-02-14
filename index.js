require("dotenv").config();

const { neon } = require("@neondatabase/serverless");

const express = require('express');
const app = express();
const port = 3000;
const sql = neon(process.env.DATABASE_URL);

// app.get('/', async (req, res) => {
//     try {
//         // Consultar los datos de la tabla Tasks
//         const result = await sql`SELECT * FROM Tasks`;
//         const tasks = result.rows; // Obtener las filas de la consulta
        
//         // Responder con los datos de las tareas
//         res.json(tasks); // Puedes mostrar los datos en formato JSON

//     } catch (error) {
//         console.error('Error al obtener datos:', error);
//         res.status(500).send('Hubo un error al obtener los datos');
//     }
// });

 // Ruta principal
app.get('/', async (req, res) => {
try {
    const result = await sql`SELECT * FROM Tasks`; // Consulta todos los registros de la tabla
    res.json(result); // Devuelve los datos en formato JSON
    } catch (error) {
    res.status(500).send("Error al obtener los datos: " + error.message);
    }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
