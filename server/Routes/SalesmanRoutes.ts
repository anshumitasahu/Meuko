import express from "express";
import { CreateSalesman } from "../Controller/Salesman";

const router = express.Router();

router.post("/create", CreateSalesman);

export default router;