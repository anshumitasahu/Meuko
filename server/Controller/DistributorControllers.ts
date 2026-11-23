import type { Request, Response } from "express"
import { prisma } from "../lib/prismaClient";
import { DistributorScehma } from "../models/distributor/distributor.model";

export const CreateDistributors = async (req: Request, res: Response) => {
    try {
        const input = DistributorScehma.safeParse(req.body);

        if (input.error) {
            return res.status(400).json({
                success: false,
                message: "Validation Error",
                data: input.error
            })
        }

        const { name, email, phone, address } = input.data;

        if (!name || !phone || !email || !address) {
            return res.status(400).json({
                success: false,
                message: "Enter valid input",
                data: null
            })
        }

        const distributor = await prisma.distributor.create({
            data: {
                name,
                email,
                phone,
                address
            }
        });

        return res.status(200).json({
            success: true,
            message: "Distributor created successfully",
            data: distributor
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "createDistributors: Internal Error"
        })
    }
}

export const getDistributor = async (req: Request, res: Response) => {
    try {
        const distributors = await prisma.distributor.findMany({
            orderBy: {
                id: "asc"
            }
        });

        return res.status(200).json({
            success: true,
            message: "Distributor fetched successfully",
            data: distributors
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "getDistributors: Internal error"
        })
    }
}