import express from "express";
import { CreateSalesman, GetSalesman } from "../Controller/Salesman";
import { middleware } from "../utils/middlewares";

const router = express.Router();

router.post("/create", middleware, CreateSalesman);
router.get("/get", GetSalesman);

export default router;