import type { Request, Response } from "express";
import { prisma } from "../lib/prismaClient";

export const products = async (res: Response, req: Request) => {
    try {
        const { name, price } = req.body;

        // const product = await
    } catch (error) {

    }
}