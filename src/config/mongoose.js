import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

export const connectUsingMongoose = async() =>{
   try {
     await mongoose.connect(process.env.DB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
         }
         )
         console.log("mongodb is connected using mongoose")
   } catch (error) {
     console.log(error)
   }
}