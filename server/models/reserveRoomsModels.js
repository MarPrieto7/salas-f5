const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  hour: {
    type: Number,
    required: true
  },
  room: {
    type: mongoose.Schema.Types.ObjectId, // Utiliza el tipo ObjectId para referenciar a la sala
    ref: 'Room', // Hace referencia al modelo Room
    required: true
  }
});

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;
