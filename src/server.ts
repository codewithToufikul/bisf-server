import {Server} from "http";
import { envItem } from "./app/config/env.js";
import mongoose from "mongoose";
import app from "./app.js";
import { seedAdmin } from "./app/utils/seed.js";

const port = envItem.PORT;
let server: Server

const startServer = async () =>{
    try {
        await mongoose.connect(`${envItem.MONGODB_URI}`);
        console.log("Server Connected to the Server.")
        
        // Seed Default Admin
        await seedAdmin();

        server = app.listen(port, ()=>{
            console.log(`Server Running at ${port}`);
        })
    } catch (error) {
        console.log(error);
    }
}

startServer();