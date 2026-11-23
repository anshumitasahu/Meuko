import express from "express";
import { CreateSalesman, GetSalesman } from "../Controller/Salesman";
import { middleware } from "../utils/middlewares";
import { CreateDistributors, getDistributor } from "../Controller/DistributorControllers";

const router = express.Router();

router.get("/get", getDistributor);
router.post("/create", middleware, CreateDistributors);

export default router;