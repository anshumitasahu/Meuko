import type { Response } from "express";
import jwt from "jsonwebtoken";

const secret = process.env.JWT_TOKEN;
if (!secret) {
    throw new Error("JWT_TOKEN credentials not found")
}
const node_env = process.env.NODE_ENV;
const expiry = "1h";

export const generateToken = (role: 'Admin', res: Response) => {
    const token = jwt.sign({ role }, secret, { expiresIn: expiry });
    res.cookie("token", token, {
        httpOnly: true,
        secure: node_env === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 1000
    })
    return token;
}