"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { RegisterSchema } from "./schema";

export async function serverAction(formData: FormData) {
  const data = Object.fromEntries(formData.entries());
  const result = RegisterSchema.safeParse(data);
  if (!result.success) return { success: false, data: result.error.issues };
  return result;
}

export async function signup(formData: FormData) {
  const supabase = createClient();
  const data = Object.fromEntries(formData.entries());
  const result = RegisterSchema.safeParse(data);
  if (!result.success) return { success: false, data: result.error.issues };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}
