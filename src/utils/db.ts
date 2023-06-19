import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";

let mongodb:MongoMemoryServer;
export async function connect(){
    mongodb=await MongoMemoryServer.create();
    const uri=mongodb.getUri();
    
    await mongoose.connect(uri);
}

export async function closedb(){
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
   if (mongodb)
        await mongodb.stop();

}