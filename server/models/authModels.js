import mongoose from "mongoose";

const authSchema = new mongoose.Schema ({
    name: {type: String, required : true},
    username: {type: String, required : true},
    email: {type: String, required : true},
    status: {type: String, required : true},
    password: {type: String, required : true},
    role: {type: String, default: "user", enum:["user", "admin", "professor", "principal"], required : true},
},
    {collection: "users"}
)

 const User = mongoose.model ('User', authSchema);

 export default User;