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

  const clientAction = async (formData: FormData) => {
    console.log("Calling clientAction...");
    formAction(formData);
  };

  return (
    <form action={clientAction}>
      <TextInput
        label="First Name"
        placeholder="Enter your first name"
        name="firstName"
        defaultValue={formState?.fieldValues?.firstName as string}
        error={formState.errors?.firstName?.[0]}
        mb={15}
      />
      <TextInput
        label="Last Name"
        placeholder="Enter your last name"
        name="lastName"
        defaultValue={formState?.fieldValues?.lastName as string}
        error={formState.errors?.lastName?.[0]}
        mb={15}
      />
      <SubmitButton text="Submit" />
    </form>
  );
}
