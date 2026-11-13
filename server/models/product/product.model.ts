import z from "zod";

export const ProductSchema = z.object({
    name: z.string().min(3).max(255).regex(/^[\p{L}\p{M}]+(?:[ '-][\p{L}\p{M}]+)*$/u),
    price: z.number().positive().min(20).max(99999999.99)
});