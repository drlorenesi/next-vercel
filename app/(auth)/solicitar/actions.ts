"use server";

export async function handleSubmit(formData: FormData) {
  console.log("Hello from the server!", formData);
}
