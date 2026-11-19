import type { Request, Response } from "express";
import { prisma } from "../lib/prismaClient"
import { success } from "zod";

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
            message: "Internal Error: salesman cannot be created",
            data: null
        })
    }
}


export const GetSalesman = async (req: Request, res: Response) => {
    try {
        const salesmen = await prisma.salesman.findMany()

        return res.status(200).json({
            success: true,
            message: "salesmen fetched successfully"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Error: salesman cannot be fetched)"
        })
    }
}