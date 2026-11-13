import type { Request, Response } from "express";
import { generateToken } from "../../utils/jwt";
import { LoginSchema } from "../../models/auth/auth.models";

if (!process.env.ADMIN_EMAIL || !process.env.ADMIN_PASSWORD) {
    throw new Error("Admin credentials not found")
}

const node_env = process.env.NODE_ENV;

if (!node_env) {
    throw new Error("NODE_ENV not found in env")
}

export const adminLogin = async (req: Request, res: Response) => {
    try {
        const input = LoginSchema.safeParse(req.body);
        if (input.error) {
            return res.status(400).json({
                success: false,
                message: "Validation Error",
                data: input.error
            })
        }
        const {email, password} = input.data;

        const admin_email = process.env.ADMIN_EMAIL;
        const admmin_password = process.env.ADMIN_PASSWORD;

        if (email !== admin_email || password !== admmin_password) {
            return res.status(401).json({
                success: false,
                message: "invalid email or password",
                data: null
            })
        }

        const token = generateToken(1, "Admin");

        res.cookie("token", token, {
            httpOnly: true,
            secure: node_env === "production",
            sameSite: "lax",
            maxAge: 60 * 60 * 1000
        })

        return res.status(200).json({
            success: true,
            message: "Login successfull!"
        })
    } catch (error) {
        return res.status(500).json({ success: false, message: "internal server error!", data: null })
    }
}