"use server";

import { LoginSchema, LoginType } from "./schema";

export async function serverAction(values: LoginType) {
  await new Promise((resolve) => setTimeout(resolve, 500));
  // throw new Error("There was a server error...");
  try {
    const result = LoginSchema.safeParse(values);
    if (!result.success) return result.error.issues;
    return result;
  } catch (error) {
    throw new Error("There was a server error...");
  }
}
