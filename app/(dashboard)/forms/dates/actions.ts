"use server";

import { DateSchema } from "./schema";

export async function serverAction(formData: FormData) {
  const data = Object.fromEntries(formData.entries());
  const result = DateSchema.safeParse(data);
  if (!result.success) return { success: false, data: result.error.issues };
  return result;
}
