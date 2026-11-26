import express from "express";
import { CreateSecondaryOrderController, getSecondaryOrder } from "../../Controller/order/SecondaryOrder";
import { middleware } from "../../utils/middlewares";

const router = express.Router();

router.get("/get", getSecondaryOrder);
router.post("/create/:id", middleware, CreateSecondaryOrderController);

export default router;