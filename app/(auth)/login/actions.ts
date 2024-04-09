"use server";

import { LoginSchema } from "./schema";

export async function serverAction(prevState: any, formData: FormData) {
  const data = Object.fromEntries(formData.entries());
  const result = LoginSchema.safeParse(data);

  let errors: { [key: string]: string } = {};

  try {
    // Check if user is authorized
    // Return early if the form data is invalid
    if (!result.success) {
      result.error.issues.forEach(
        (issue) => (errors[issue.path[0]] = issue.message)
      );
      return { errors };
    }
    // Process data
  } catch (error) {
    throw new Error("There was a server error...");
  }
}
