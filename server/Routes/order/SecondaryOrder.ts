import express from "express";
import { CreateSecondaryOrderController, getSecondaryOrder, getSecondaryOrdersForSalesman } from "../../Controller/order/SecondaryOrder";
import { middleware } from "../../utils/middlewares";

const router = express.Router();

router.get("/get", getSecondaryOrder);
router.post("/create/:id", middleware("Salesman"), CreateSecondaryOrderController);
router.get("/getMyOrders", getSecondaryOrdersForSalesman);

export default router;