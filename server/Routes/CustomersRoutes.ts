import express from "express";
import { createCustomer, getCustomer } from "../Controller/CustomerController";

const router = express.Router();

router.post("/create", createCustomer);
router.get("/get", getCustomer);

export default router;