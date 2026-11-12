declare global {
    namespace Express {
        interface Request {
            user?: {
                id: int,
                role: string;
            }
        }
    }
}

export { }