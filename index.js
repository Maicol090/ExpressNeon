require("dotenv").config();

const { neon } = require("@neondatabase/serverless");

const express = require('express');
const app = express();
const port = 3000;
const sql = neon(process.env.DATABASE_URL);

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
