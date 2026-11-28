import type { Request, Response } from "express"
import { prisma } from "../../lib/prismaClient";

export const CreatePrimaryOrderController = async (req: Request, res: Response) => {
    try {
        const distributorId = Number(req.params.id);
        const salesmanId = req.user?.id
        const { items } = req.body;

        if (!salesmanId) {
            throw new Error("salesmanId is required");
        }

        const order = await prisma.primaryOrder.create({
            data: {
                distributorId,
                salesmanId,
                orderItems: {
                    create: items.map((item: any) => ({
                        productId: item.productId,
                        quantity: item.quantity
                    }))
                }
            },
            include: {
                distributor: true,
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
        console.log("Error:", error)
        return res.status(500).json({
            success: false,
            message: "createPrimaryOrder: Internal Error",
            data: null
        })
    }
}

export const getPrimaryOrders = async (req: Request, res: Response) => {
    try {
        const orders = await prisma.primaryOrder.findMany({
            include: {
                distributor: true,
                createdBy: true,
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
            message: "Primary orders fetched successfully",
            data: orders
        })
    } catch (error) {
        console.log("Error:", error)
        return res.status(500).json({
            success: false,
            message: "getPrimaryOrders: Internal Error",
            data: null
        })
    }
}