import express from "express";
import { adminLogin } from "../../Controller/auth/adminLoginController";
import { Me } from "../../Controller/me";
import { middleware } from "../../utils/middlewares";


const router = express.Router();

router.post("/login", adminLogin);
router.get("/me", middleware, Me);

export default router;

