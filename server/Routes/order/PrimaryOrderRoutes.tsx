import express from "express";
import { CreatePrimaryOrderController, getPrimaryOrders } from "../../Controller/order/PrimaryOrderController";
import { middleware } from "../../utils/middlewares";

const router = express.Router();

router.get("/get/:id", getPrimaryOrders);
router.post("/create/:id", middleware, CreatePrimaryOrderController);

export default router;