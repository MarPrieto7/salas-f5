const Reservation = require('../models/Reservation');

// Controlador para crear una nueva reserva
exports.createReservation = async (req, res) => {
  try {
    const { name, date, hour, room } = req.body;
    const reservation = new Reservation({ name, date, hour, room });
    await reservation.save();
    res.status(201).json(reservation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para obtener una reserva por su ID
exports.getReservationById = async (req, res) => {
  try {
    const reservation = await Reservation.findById(req.params.id);
    if (!reservation) {
      return res.status(404).json({ message: 'Reserva no encontrada' });
    }
    res.json(reservation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
