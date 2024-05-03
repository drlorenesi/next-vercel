"use server";

import { createClient } from "@/utils/supabase/server";

export async function validateData(values: any, schema: any) {
  const supabase = createClient();
  const { data } = await supabase.auth.getUser();
  if (!data.user) {
    throw new Error("You must be signed in to perform this action");
  }
  const result = schema.safeParse(values);
  if (!result.success) {
    return {
      message: "error",
      errors: result.error.flatten().fieldErrors,
      fieldValues: values,
    };
  }
  return { message: "success", errors: null, fieldValues: result.data };
}
