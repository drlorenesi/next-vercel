"use server";

import { ResetSchema } from "./schema";

export async function serverAction(formData: FormData) {
  const data = Object.fromEntries(formData.entries());
  const result = ResetSchema.safeParse(data);
  if (!result.success) return { success: false, data: result.error.issues };
  return result;
}
