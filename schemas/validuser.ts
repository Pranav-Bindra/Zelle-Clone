import { z } from 'zod';

export const validuser = z.object({
    username:z.string().email(),
    password: z.string().min(8),
    firstName: z.string(),
    lastName: z.string()
})

export type User = z.infer<typeof validuser>;