import jwt from "jsonwebtoken";
import type { Response, Request, NextFunction } from "express";

const jwtSecret = process.env.JWT_TOKEN;
if (!jwtSecret) {
    throw new Error("JWT TOKEN not found")
}

export const middleware = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.cookies.token;

        console.log(token);

        if (!token) {
            return res.status(401).json({
                succes: false,
                message: "Can't found token from cookies"
            })
        }

        if (typeof token !== "string") {
            return res.status(401).json({
                success: false,
                message: "Could not found token!"
            })
        }

        const decoded = jwt.verify(token, jwtSecret) as {
            role: "Admin"
        }

        if (decoded.role !== "Admin") {
            return res.status(403).json({
                success: false,
                message: "Not a valid role"
            })
        }
        req.user = decoded

        next()
    } catch (error) {
        if (error instanceof jwt.TokenExpiredError) {
            console.error("Token Expired")
            return res.status(401).json({ success: false, message: "Token expired" })
        }
        if (error instanceof jwt.JsonWebTokenError) {
            console.error("jwt error, jwt error")
            return res.status(401).json({ success: false, message: "Invalid or malformed JWT", data: null })
        }
        else return res.status(500).json({ success: false, message: "internal server error, middleware", data: null })
    }
}