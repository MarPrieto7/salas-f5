import { User } from "../models/authModels";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export const Register = async (req, res) => {
    const { name, username, password, email, status } = req.body;
    try {
        const existingUsername = await User.findOne({ username: username })
        if (existingUsername) {
            res.status(400).json({ message: "este Usuario ya existe" })
        }
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)

        const credentials = new User({
            name: name,
            username: username,
            password: hashPassword,
            email: email
        })
        await credentials.save()
        res.status(200).json({ message: "registro creado", credentials })
    } catch (error) {
        res.status(500).json({ message: " ha habido algun error" })
    }
}

export const Login = async (req, res) => {
    const { username, password } = req.body
    try {
        const user = await User.findOne({ username: username })
        if (!user) {
            return res.status(400).json({ message: " usuario invalido" })
        } else {
            const validPassword = await bcrypt.compare(password, user.password)
            if (!validPassword) {
                return res.status(400).json({ message: "contraseña incorrecta" })
            }
        }
        //Generamos un token tras el login
        const token = jwt.sign({
            username: username,
            role: user.role

        }, "codesecret")

        await res.header({
            //le damos un nombre a ese header
            "auth": token
        })
        res.status(200).json({ message: "Bienvenido ${user.username}!", token })
    } catch (error) {
        res.status(500).json({ message: "El login ha ido mal", error })
    }
}    