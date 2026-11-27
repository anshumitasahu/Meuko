import express from "express";
import { CreatePrimaryOrderController, getPrimaryOrders } from "../../Controller/order/PrimaryOrderController";
import { middleware } from "../../utils/middlewares";

const router = express.Router();

router.get("/get", getPrimaryOrders);
router.post("/create/:id", middleware("Salesman"), CreatePrimaryOrderController);

export default router;