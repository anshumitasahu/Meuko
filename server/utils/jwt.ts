import jwt from "jsonwebtoken";

const secret = process.env.JWT_TOKEN;
if (!secret) {
    throw new Error("JWT_TOKEN credentials not found")
}
const expiry = "1h";

export const generateToken = (id: Number, role: 'Admin' | 'Salesman') => {
    const token = jwt.sign({ id, role }, secret, { expiresIn: expiry });

    return token;
};