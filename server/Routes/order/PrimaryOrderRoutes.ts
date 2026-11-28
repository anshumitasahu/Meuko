import express from "express";
import { CreatePrimaryOrderController, getPrimaryOrders, getPrimaryOrdersForSalesman } from "../../Controller/order/PrimaryOrderController";
import { middleware } from "../../utils/middlewares";

const router = express.Router();

router.get("/get", getPrimaryOrders);
router.post("/create/:id", middleware("Salesman"), CreatePrimaryOrderController);
router.get("/getMyOrders", getPrimaryOrdersForSalesman);

export default router;