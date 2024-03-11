import mongoose from "mongoose";

export const db = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/salas-f5")
        // await mongoose.connect("mongodb+srv://natalia:qR!dkh8N$W9mi3.@salas-f5.ziprwpx.mongodb.net/?retryWrites=true&w=majority", {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true
        ;
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};
