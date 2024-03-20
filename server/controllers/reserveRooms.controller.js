import Reservation from '../models/reserveRoomsModels.js';

// Controlador para crear una reserva
export const createReservation = async (req, res) => {
  const { user, date, hour, room } = req.body;
  try {
    const newReservation = new Reservation({
      user,
      date,
      hour,
      room
    });
    await newReservation.save();
    res.status(200).json(newReservation);
  } catch (error) {
    console.error(error); // Añade esta línea para registrar el error en la consola
    res.status(500).json({ message: error.message });
  }
};


// Controlador para eliminar una reserva
export const deleteReservation = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedReservation = await Reservation.findByIdAndDelete(id);
    if (!deletedReservation) {
      return res.status(404).json({ message: "Reserva no encontrada" });
    }
    res.json({ message: "Reserva eliminada exitosamente", deletedReservation });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controlador para ver una reserva por su ID
export const getReservationById = async (req, res) => {
  try {
    const { id } = req.params;
    const reservation = await Reservation.findById(id)
      .populate('user', 'username') // Aquí se especifica el campo 'username' que deseas obtener
      .populate('room');
    if (!reservation) {
      return res.status(404).json({ message: "Reserva no encontrada" });
    }
    res.json(reservation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Controlador para ver todas las reservas
export const getAllReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find().populate('room').populate('user');
    res.json(reservations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
