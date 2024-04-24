import { z } from "zod";

export const ChangeSchema = z
  .object({
    password: z.string().min(6, "Password must be at least 6 charachters"),
    confirmPass: z.string(),
  })
  .refine((data) => data.password === data.confirmPass, {
    message: "Passwords don't match",
    path: ["confirmPass"],
  });

// extract the inferred type
export type ChangeType = z.infer<typeof ChangeSchema>;
