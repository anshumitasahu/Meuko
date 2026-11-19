import express from "express";
import { createProducts, getProducts } from "../Controller/ProductController";
import { middleware } from "../utils/middlewares";

const router = express.Router();

router.post("/createProducts", middleware, createProducts);
router.get("/getProducts", getProducts);

export default router;