import express  from "express";
import { Login, Register, getAllUsers, getUserById, updateUserById, deleteUserById} from "../controllers/auth.controller.js";
const router = express.Router()

router.post("/register",Register)
router.post("/login", Login)
router.get('/users', getAllUsers)
router.get('/:usersId', getUserById)
router.put('/', updateUserById)
router.delete('/:_id', deleteUserById)


export default router;