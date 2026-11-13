import express from "express";
import { createProducts } from "../Controller/ProductController";

const router = express.Router();

router.post("/createProducts", createProducts);

export default router;