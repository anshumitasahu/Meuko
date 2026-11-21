import z from "zod";

export const DistributorScehma = z.object({
    name: z.string().min(3).max(255),
    email: z.string().regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
    phone: z.string().regex(/^(?:\+91[\-\s]?|91[\-\s]?|0)?[1-9]\d{9}$/),
    address: z.string().min(10).max(255).regex(/^(?=.*[a-zA-Z])(?=.*\b[1-9][0-9]{5}\b)[a-zA-Z0-9\s,.\-/#&'()]{10,200}$/)
})