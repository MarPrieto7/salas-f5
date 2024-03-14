import express  from "express";
import { RegisterRoom, getAllRoom, getRoomById, updateRoomById, deleteRoomById} from "../controllers/rooms.controller.js";
const router = express.Router()

router.post("/register", RegisterRoom)
router.get('/room', getAllRoom)
router.get('/:id', getRoomById)
router.put('/:id', updateRoomById)
router.delete('/:id', deleteRoomById)


export default router;