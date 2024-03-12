import express  from "express";
import { Login, Register, getAllUsers, getUserById, updateUserById, deleteUserById} from "../controllers/authController.js";
const router = express.Router()

router.post("/register",Register)
router.post("/login", Login)
router.get('/', getAllUsers)
router.get('/', getUserById)
router.put('/', updateUserById)
router.delete('/', deleteUserById)


export default router;