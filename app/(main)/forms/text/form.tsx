"use client";

import { TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";
import toast from "react-hot-toast";

import SubmitButton from "@/app/_components/formInputs/SubmitButton";

import { schema } from "./schema";
import { testAction } from "./action";

export default function Form() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      firstName: "",
      lastName: "",
    },
    validate: zodResolver(schema),
  });

  const clientAction = async (formData: FormData) => {
    if (form.validate().hasErrors) return;
    const values = Object.fromEntries(formData);
    const { message } = await testAction(values);
    if (message === "error") return toast.error("Ocurrió un error...");
    toast.success("Form Submitted!");
    form.reset();
  };

  return (
    <form action={clientAction}>
      <TextInput
        label="First Name"
        placeholder="Enter your first name"
        name="firstName"
        {...form.getInputProps("firstName")}
        key={form.key("firstName")}
        mb={15}
      />
      <TextInput
        label="Last Name"
        placeholder="Enter your last name"
        name="lastName"
        {...form.getInputProps("lastName")}
        key={form.key("lastName")}
        mb={15}
      />
      <SubmitButton text="Submit" />
    </form>
  );
}
