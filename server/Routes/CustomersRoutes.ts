import express from "express";
import { createCustomer, getCustomer } from "../Controller/CustomerController";
import { middleware } from "../utils/middlewares";

const router = express.Router();

router.post("/create", middleware, createCustomer);
router.get("/get", getCustomer);

export default router;