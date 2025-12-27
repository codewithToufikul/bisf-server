import express, { type Request, type Response } from 'express';
import cors from 'cors';
import { AuthRoutes } from './app/routes/authRoutes.js';
import { ApplicationRoutes } from './app/routes/applicationRoutes.js';
import { MemberRoutes } from './app/routes/memberRoutes.js';
import { AdminRoutes } from './app/routes/adminRoutes.js';

const app = express();

app.use(cors({
    origin: ['http://localhost:5173', 'https://bilfuk.com', 'https://www.bilfuk.com'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

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

// Routes
app.use("/api/auth", AuthRoutes);
app.use("/api/applications", ApplicationRoutes);
app.use("/api/members", MemberRoutes);
app.use("/api/admin", AdminRoutes);

export default app;