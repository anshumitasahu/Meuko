import jwt from "jsonwebtoken";
import type { Response, Request, NextFunction } from "express";

const jwtSecret = process.env.JWT_TOKEN;
if (!jwtSecret) {
    throw new Error("JWT TOKEN not found");
}

type UserRole = "Admin" | "Salesman";

interface DecodedUser {
    id: number;
    role: UserRole;
}

export const middleware = (...allowedRoles: UserRole[]) => {
    return (req: Request, res: Response, next: NextFunction
    ) => {
        try {
            const token = req.cookies?.token;

            if (!token || typeof token !== "string") {
                return res.status(401).json({
                    success: false,
                    message: "Authentication token not found"
                });
            }

            const decoded = jwt.verify(token, jwtSecret) as DecodedUser;

            if (
                decoded.role !== "Admin" &&
                decoded.role !== "Salesman"
            ) {
                return res.status(403).json({
                    success: false,
                    message: "Invalid user role"
                });
            }

            if (!allowedRoles.includes(decoded.role)) {
                return res.status(403).json({
                    success: false,
                    message: "You are not authorized to access this resource"
                });
            }

            req.user = decoded;

            return next();

        } catch (error) {

            if (error instanceof jwt.TokenExpiredError) {
                return res.status(401).json({
                    success: false,
                    message: "Token expired"
                });
            }

            if (error instanceof jwt.JsonWebTokenError) {
                return res.status(401).json({
                    success: false,
                    message: "Invalid or malformed JWT"
                });
            }

            return res.status(500).json({
                success: false,
                message: "Internal server error"
            });
        }
    };
};
