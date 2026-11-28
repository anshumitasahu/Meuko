import type { Request, Response } from "express"
import { prisma } from "../../lib/prismaClient";

export const CreateSecondaryOrderController = async (req: Request, res: Response) => {
    try {
        const { customerId, items } = req.body;
        const salesmanId = req.user?.id

        if (!salesmanId) {
            throw new Error("salesmanId is required");
        }

        const order = await prisma.secondaryOrder.create({
            data: {
                customerId,
                salesmanId,
                orderItems: {
                    create: items.map((item: any) => ({
                        productId: item.productId,
                        quantity: item.quantity
                    }))
                }
            },
            include: {
                customer: true,
                createdBy: true,
                orderItems: {
                    include: {
                        product: true
                    }
                }
            }
        })

        return res.status(201).json({
            success: true,
            message: "Order created successfully",
            data: order
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "CreateSecondaryOrderController: Internal Error",
            data: null,
        })
    }
}

export const getSecondaryOrder = async (req: Request, res: Response) => {
    try {
        const orders = await prisma.secondaryOrder.findMany({
            include: {
                customer: true,
                orderItems: {
                    include: {
                        product: true
                    }
                }
            },
            orderBy: {
                id: "asc"
            }
        });

        return res.status(200).json({
            success: true,
            message: "Secondary orders fetched successfully",
            data: orders
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "getSecondaryOrder: Internal Error",
            data: null
        })
    }
}