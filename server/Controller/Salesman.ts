import type { Request, Response } from "express";
import { prisma } from "../lib/prismaClient"

export const CreateSalesman = async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body;

        const createdSalesman = await prisma.salesman.create({
            data: {
                name,
                email,
                password
            }
        })

        return res.status(201).json({
            success: true,
            message: "salesman man created successfully",
            data: createdSalesman
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Error Occuerred",
            data: null
        })
    }
}