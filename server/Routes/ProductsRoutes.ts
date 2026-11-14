import express from "express";
import { createProducts, getProducts } from "../Controller/ProductController";

const router = express.Router();

router.post("/createProducts", createProducts);
router.get("/getProducts", getProducts);

export default router;