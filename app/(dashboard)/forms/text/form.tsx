"use client";

import { useFormState } from "react-dom";
import { TextInput } from "@mantine/core";

import SubmitButton from "@/app/_components/formInputs/SubmitButton";

import { testAction } from "./action";

export default function Form() {
  const [formState, formAction] = useFormState(testAction, {
    message: "",
    errors: null,
    fieldValues: {
      firstName: "",
      lastName: "",
    },
  });

  return (
    <form action={formAction}>
      <TextInput
        label="First Name"
        placeholder="Enter your first name"
        name="firstName"
        error={formState.errors?.firstName?.[0]}
        mb={15}
      />
      <TextInput
        label="Last Name"
        placeholder="Enter your last name"
        name="lastName"
        error={formState.errors?.lastName?.[0]}
        mb={15}
      />
      <SubmitButton text="Submit" />
    </form>
  );
}
