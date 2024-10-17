import mongoose from "mongoose";

export const connectDB = async() => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Connected to MongoDB at ${conn.connection.host}`);
    }catch(e){
        console.error(`Error connecting to MongoDB: ${e.message}`);
        process.exit(1);  // 1 means failure 
    }
}