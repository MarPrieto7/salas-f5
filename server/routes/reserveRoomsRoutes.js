const express = require('express');
const mongoose = require('mongoose');
const reservationRoutes = require('./reservationRoutes'); // Corregir la importación de las rutas de reservaciones
const authRoutes = require('./authRoutes'); // Importa las rutas de autenticación

const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/salas-f5', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Conexión exitosa a MongoDB');
}).catch(err => console.error('Error al conectar a MongoDB:', err));

// Rutas
app.use('/api/reservations', reservationRoutes); // Utiliza las rutas de reservaciones en '/api/reservations'
app.use('/api/auth', authRoutes); // Utiliza las rutas de autenticación en '/api/auth'

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
