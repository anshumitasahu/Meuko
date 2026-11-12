import type { Request, Response } from "express";
import { prisma } from "../../lib/prismaClient";
import bcrypt from "bcryptjs"
import { generateToken } from "../../utils/jwt";

const node_env = process.env.NODE_ENV;

if (!node_env) {
    throw new Error("NODE_ENV not found in env")
}

export const salesmanLogin = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Enter email and password to login",
                data: null
            })
        }

        const loggedSalesman = await prisma.salesman.findUnique({
            where: {
                email
            }
        })

        if (!loggedSalesman) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized salesman, enter valid email or password"
            })
        }

        const isPasswordValid = await bcrypt.compare(password, loggedSalesman.password)

        if (!isPasswordValid) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized salesman, enter valid password or email"
            })
        }

        const token = generateToken(loggedSalesman.id, "Salesman");

        res.cookie("token", token, {
            httpOnly: true,
            secure: node_env === "production",
            sameSite: "lax",
            maxAge: 60 * 60 * 1000
        })

        return res.status(200).json({
            success: true,
            message: "Salesman successfully logged in",
            data: {
                loggedSalesman: {
                    id: loggedSalesman.id,
                    name: loggedSalesman.name,
                    email: loggedSalesman.email,
                }
            }
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Error"
        })
    }
}