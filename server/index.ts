console.log("Hello via Bun!");

import express, { type Express, type Request, type Response } from 'express';
import cors from "cors";
import cookieParser from 'cookie-parser';
import adminAuthRoutes from "./Routes/adminLoginRoutes"

const app: Express = express();
const PORT = 3000;

app.use(cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true
}));

app.use(express.json());
app.use(cookieParser())

app.use("/auth", adminAuthRoutes);


app.get("/", (req: Request, res: Response) => {
    res.json({
        status: "OK",
        runtime: "Bun",
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});