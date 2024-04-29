import { z } from "zod";

export const schema = z
  .object({
    password: z
      .string()
      .min(6, "La contraseña debe contener por lo menos 6 caracteres"),
    confirmPass: z.string(),
  })
  .refine((data) => data.password === data.confirmPass, {
    message: "Las contraseñas no concuerdan",
    path: ["confirmPass"],
  });
