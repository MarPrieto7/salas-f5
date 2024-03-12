import mongoose from "mongoose";


export const db = async() => {
    try {
        await mongoose.connect ("mongodb+srv://natalia:<qR!dkh8N$W9mi3.>@salas-f5.ziprwpx.mongodb.net/?retryWrites=true&w=majority")
        console.log("Connected")
    } catch (error) {
        console.log(Error)
        
    }
}
