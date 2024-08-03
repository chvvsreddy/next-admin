import mongoose from "mongoose";

export const connectToDB = async () => {
    const connection ={}

    try {
        if(connection.isConnected) return;
        const db = await mongoose.connect(process.env.MONGO_DB);        
        connection.isConnected = db.connections[0].readyStatex
      } catch (error) {
        throw new Error(error);
      }

}