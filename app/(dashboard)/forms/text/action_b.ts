"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/utils/supabase/server";

import { schema } from "./schema";

export async function testAction(formState: any, formData: FormData) {
  const supabase = createClient();
  const { data } = await supabase.auth.getUser();
  if (!data.user) {
    throw new Error("You must be signed in to perform this action");
  }
  const values = Object.fromEntries(formData);
  const result = schema.safeParse(values);
  if (!result.success)
    return {
      message: "error",
      errors: result.error.flatten().fieldErrors,
      fieldValues: values,
    };
  revalidatePath("/forms/text");
  return { message: "success", errors: null, fieldValues: result.data };
}
