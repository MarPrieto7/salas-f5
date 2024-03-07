import mongoose from "mongoose";

const authSchema = mongoose.Schema ({
    name: {type: String, require: true},
    username: {type: String, require: true},
    email: {type: String, require: true},
    status: {type: String, require: true},
    password: {type: String, require: true},
    role: {type: String, default: "user", enum:["user", "admin", "professor", "principal"], require: true},
})

export const User = mongoose.model(
    "users", authSchema
)