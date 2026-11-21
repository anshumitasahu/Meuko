import type { Request, Response } from "express"
import { prisma } from "../lib/prismaClient";
import { CustomerSchema } from "../models/customer/customer.model";

export const createCustomer = async (req: Request, res: Response) => {
    try {
        const input = CustomerSchema.safeParse(req.body);

        if (input.error) {
            return res.status(400).json({
                success: false,
                message: "Validation Error",
                data: input.error
            })
        }

        const { name, phone, email, address } = input.data;

        if (!name || !phone || !email || !address) {
            return res.status(400).json({
                success: false,
                message: "Enter valid input",
                data: null
            })
        }

        const customer = await prisma.customer.create({
            data: {
                name,
                phone,
                email,
                address
            }
        });

        return res.status(200).json({
            success: true,
            message: "Customer created successfully",
            data: customer
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "createCustomer: Internal Error"
        })
    }
};

export const getCustomer = async (req: Request, res: Response) => {
    try {
        const customers = await prisma.customer.findMany()

        return res.status(200).json({
            success: true,
            message: "Customer fetched successfully",
            data: customers
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "getCustomer: Internal Error"
        })
    }
}