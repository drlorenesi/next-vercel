import { z } from "zod";

export const schema = z
  .object({
    name: z.string().min(2, "Debe ser de 2 caracteres o mayor"),
    lastName: z.string().min(2, "Debe ser de 2 caracteres o mayor"),
    email: z.string().email("Email invalido"),
    password: z
      .string()
      .min(6, "La contraseña debe contener por lo menos 6 caracteres"),
    confirm: z.string(),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Las contraseñas no concuerdan",
    path: ["confirm"], // path of error
  });
