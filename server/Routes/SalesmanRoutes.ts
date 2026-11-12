import express from "express";
import { CreateSalesman } from "../Controller/Salesman";
import { middleware } from "../utils/middlewares";

const router = express.Router();

router.post("/create", middleware, CreateSalesman);

export default router;