
import type { Request, Response } from "express";
import { prisma } from "../lib/prismaClient";

export const Me = async (req: Request, res: Response) => {
    try {
        const { id, role } = req.user!;

        if (role === "Admin") {
            return res.status(200).json({
                success: true,
                message: "Admin fetched successfully",
                data: {
                    id,
                    email: process.env.ADMIN_EMAIL,
                    role: "Admin"
                }
            });
        }

        if (role === "Salesman") {
            const salesman = await prisma.salesman.findUnique({
                where: {
                    id: Number(id)
                },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    isActive: true,
                    createdAt: true,
                    updatedAt: true
                }
            });

            if (!salesman) {
                return res.status(404).json({
                    success: false,
                    message: "Salesman not found"
                });
            }

            return res.status(200).json({
                success: true,
                message: "Salesman fetched successfully",
                data: {
                    ...salesman,
                    role: "Salesman"
                }
            });
        }

        return res.status(403).json({
            success: false,
            message: "Invalid role"
        });

    } catch (error) {
        console.error("Me Error:", error);

        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};
