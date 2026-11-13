import type { Request, Response } from "express";
import { prisma } from "../lib/prismaClient";
import { ProductSchema } from "../models/product/product.model";

export const createProducts = async (req: Request, res: Response) => {
    try {
        const input = ProductSchema.safeParse(req.body);
        if (input.error) {
            return res.status(400).json({
                success: false,
                message: "Validation Error",
                data: input.error
            })
        }

        const { name, price } = input.data;

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