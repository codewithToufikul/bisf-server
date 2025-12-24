import express, { type Request, type Response } from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());

app.get("/", async(req: Request, res: Response)=>{
    res.status(200).json({
        message: "Welcome to BISF Server App",
        version: "1.0.0",
        endpoints: {
            public: "/api/public",
            auth: "/api/auth",
            admin: "/api/admin"
        }
    })
})

export default app;