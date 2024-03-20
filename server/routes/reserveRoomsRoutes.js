import express from 'express';
import { createReservation, deleteReservation, getReservationById, getAllReservations } from '../controllers/reserveRooms.controller.js';
const router = express.Router();

router.post('/', createReservation);
router.delete('/:id', deleteReservation);
router.get('/:id', getReservationById);
router.get('/', getAllReservations);

export default router;
