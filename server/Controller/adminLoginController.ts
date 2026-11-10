import type { Request, Response } from "express";

if (!process.env.ADMIN_EMAIL || !process.env.ADMIN_PASSWORD) {
    throw new Error("Admin credentials not found")
}

export const adminLogin = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        const ROLE = "Admin"

        const admin_email = process.env.ADMIN_EMAIL;
        const admmin_password = process.env.ADMIN_PASSWORD

        if (email !== admin_email || password !== admmin_password) {
            return res.status(401).json({
                success: false,
                message: "invalid email or password",
                data: null
            })
        }

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Enter email and password to login",
                data: null
            })
        }

        return res.status(200).json({ success: true, message: "Login successfull!" })
    } catch (error) {
        return res.status(500).json({ success: false, message: "internal server error! hehehe", data: null })
    }
}