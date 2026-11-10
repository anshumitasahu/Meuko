import express from "express";
import { adminLogin } from "../Controller/adminLoginController";

const router = express.Router();

router.post("/login", adminLogin);

export default router;