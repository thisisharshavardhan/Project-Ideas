import mongoose from "mongoose";
import { asyncHandler } from "../utils/asyncHandler.js";
import { DB_NAME } from "../constants.js";

const DB_connect = async()=>{
    try {
        const connectioninstance = await mongoose.connect(process.env.MONGODB_URI+'/'+DB_NAME)
        console.log('DB Connected Successfully',connectioninstance.connection.host);
    } 
    catch (error) {
        console.log("An error occured Connecting to DB",error);    
    }
}

export {DB_connect}