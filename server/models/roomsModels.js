import mongoose from "mongoose";

const roomsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    size: { type: String, required: true },
    description: { type: [String], required: true },
    image: { type: String, required: true },
    map: { type: String, required: true }
}, { collection: "room" });

const Room = mongoose.model('Room', roomsSchema);

export default Room;