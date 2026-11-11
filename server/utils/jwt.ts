import jwt from "jsonwebtoken";

const secret = process.env.JWT_TOKEN;
if (!secret) {
    throw new Error("JWT_TOKEN credentials not found")
}
const expiry = "1h";

export const generateToken = (role: 'Admin') => {
    const token = jwt.sign({ role }, secret, { expiresIn: expiry });

    return token;
};