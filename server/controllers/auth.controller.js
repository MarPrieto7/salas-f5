import User from "../models/authModels.js";
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

// Controlador para mostrar todos los registros
export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Controlador para mostrar un único registro por su ID
export const getUserById = async (req, res) => {
    const id  = req.params._id;
    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Hubo un error al obtener el usuario", error });
    }
}

// Controlador para actualizar un registro por su ID
export const updateUserById = async (req, res) => {
    const id  = req.params;
    const { name, username, password, email, status } = req.body;
    try {
        const updatedUser = await User.findByIdAndUpdate(id, { name, username, password, email, status }, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        res.status(200).json({ message: "Usuario actualizado exitosamente", updatedUser });
    } catch (error) {
        res.status(500).json({ message: "Hubo un error al actualizar el usuario", error });
    }
}

// Controlador para eliminar un registro por su ID
export const deleteUserById = async (req, res) => {
    const id = req.params._id;
    console.log(id)
    try {
        const deletedUser = await User.findByIdAndDelete({_id:id});
        if (!deletedUser) {
            return res.status(404).json({ message: error.message });
        }
        res.status(200).json({ message: "Usuario eliminado exitosamente", deletedUser });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}