import express from "express";
import { CreateSalesman, GetSalesman } from "../Controller/Salesman";
import { middleware } from "../utils/middlewares";

const router = express.Router();

router.get("/get", GetSalesman);
router.post("/create", middleware, CreateSalesman);

export default router;