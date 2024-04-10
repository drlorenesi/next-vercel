import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email("Invalid email address"),
  pass: z.string().min(1, "Password is required"),
});

export type LoginType = z.infer<typeof LoginSchema>;
