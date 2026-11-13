import type { Request, Response } from "express";
import { prisma } from "../lib/prismaClient";

export const createProducts = async (req: Request, res: Response) => {
    try {
        const { name, price } = req.body;

        const product = await prisma.products.create({
            data: {
                name,
                price
            }
        })

        return res.status(201).json({
            success: true,
            message: "Product created successfully",
            data: product
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Error Occuerred",
            error: error
        })
    }
}