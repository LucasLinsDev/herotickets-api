import mongoose from "mongoose";

export async function connect(){
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/hero-conde');
    }catch(error){
        console.log(" ~ file: database.ts:5 - connect - error:", error)
    }
}