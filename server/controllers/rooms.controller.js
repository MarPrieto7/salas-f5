import Room from "../models/roomsModels.js";

export const RegisterRoom = async (req, res) => {
    const { name, image, map, description, size } = req.body;
    try {
        const existingRoomname = await Room.findOne({ name: name })
        if (existingRoomname) {
            res.status(400).json({ message: "esta sala ya existe" })
        }
        const credentials = new Room({
            name: name,
            image: image,
            map: map,
            description: description,
            size: size,
        })
        await credentials.save()
        res.status(200).json({ message: "Sala creada" })
    } catch (error) {
        res.status(500).json({ message: " ha habido algun error" })
    }
}

// Controlador para mostrar todos los registros
export const getAllRoom = async (req, res) => {
    try {
        const room = await Room.find({});
        res.status(200).json(room);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Controlador para mostrar un único registro por su ID
export const getRoomById = async (req, res) => {
    const id  = req.params.id;
    console.log(id)
    try {
        const room = await Room.findById(id);
        if (!room) {
            return res.status(404).json({ message: "Sala no encontrada" });
        }
        res.status(200).json(room);
    } catch (error) {
        res.status(500).json({ message: "Hubo un error al obtener la sala", error });
    }
}

// Controlador para actualizar un registro por su ID
export const updateRoomById = async (req, res) => {
    const id  = req.params.id;
    const { name, image, map, description, size } = req.body;
    try {
        const updatedRoom = await Room.findByIdAndUpdate(id, { name, image, map, description, size }, { new: true });
        if (!updatedRoom) {
            return res.status(404).json({ message: "Sala no encontrada" });
        }
        res.status(200).json({ message: "Sala actualizada exitosamente", updatedRoom });
    } catch (error) {
        res.status(500).json({ message: "Hubo un error al actualizar la sala", error });
    }
}

// Controlador para eliminar un registro por su ID
export const deleteRoomById = async (req, res) => {
    const id = req.params.id;
    try {
        const deletedRoom = await Room.findByIdAndDelete(id);
        if (!deletedRoom) {
            return res.status(404).json({ message: error.message });
        }
        res.status(200).json({ message: "Sala eliminada exitosamente", deletedRoom });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}