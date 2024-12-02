import {connect}from "mongoose";
import "dotenv/config";

const mongo_Url=process.env.mongo_Url;

export const initMongoDB= async()=>{
    try {
        await connect(mongo_Url);
        console.log("Mongo conected");
        
    } catch (error) {
        throw new Error("error");
        
        
    }
}