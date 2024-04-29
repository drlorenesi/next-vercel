import { z } from "zod";

export const schema = z.object({
  email: z.string().email("Email invalido"),
  pass: z.string().min(1, "Ingresa tu contraseña"),
});
