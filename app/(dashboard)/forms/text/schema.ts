import { z } from "zod";

export const schema = z.object({
  firstName: z.string().min(2, "Debe ser de 2 caracteres o mayor"),
  lastName: z.string().min(2, "Debe ser de 2 caracteres o mayor"),
});
