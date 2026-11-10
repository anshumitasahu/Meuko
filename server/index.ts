console.log("Hello via Bun!");

import express, { type Express, type Request, type Response } from 'express';
import cors from "cors";
import adminAuthRoutes from "./Routes/adminLoginRoutes"

const app: Express = express();
const PORT = 3000;

app.use(cors());

app.use(express.json());

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