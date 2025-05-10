import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import dotenv from 'dotenv';

// Cargar variables de entorno
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware para parsear JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir archivos estáticos desde la carpeta dist (generada por Vite)
app.use(express.static(resolve(__dirname, 'dist')));

// Definir rutas API explícitamente si las necesitas
// app.use('/api', apiRoutes);

// Todas las rutas no manejadas serán dirigidas al index.html
// Asegurarse de que las rutas estén bien formadas
app.get('*', (req, res) => {
  // Evitar problemas con path-to-regexp enviando el archivo index.html
  res.sendFile(resolve(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  console.log(`Asegúrate de que la aplicación esté construida con 'npm run build' antes de desplegar`);
});