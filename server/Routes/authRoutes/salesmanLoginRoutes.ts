import express from "express";
import { salesmanLogin } from "../../Controller/auth/salesmanLoginController";

const router = express.Router();

router.post("/salesman", salesmanLogin);

export default router;