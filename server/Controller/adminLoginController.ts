import type { Request, Response } from "express";


export const adminLogin = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        const admin_email = process.env.ADMIN_EMAIL;
        const admmin_password = process.env.ADMIN_PASSWORD

        if (email !== admin_email || password !== admmin_password) {
            return res.status(402).json({
                success: false,
                message: "invalid email or password",
                data: null
            })
        }

        return res.status(200).json({ success: true, message: "yay!" })
    } catch (error) {
        return res.status(500).json({ success: false, message: "internal server error! hehehe", data: null })
    }
}