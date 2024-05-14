"use server";

import { validateData } from "@/app/_lib/validateData";

import { schema } from "./schema";

interface FormValues {
  [k: string]: FormDataEntryValue;
}

export async function testAction(values: FormValues) {
  // Validate values
  const { message, errors, fieldValues } = await validateData(values, schema);
  console.log({ message, errors, fieldValues });
  // Process Data
  return { message, errors, fieldValues };
}
