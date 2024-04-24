"use client";

import { Button } from "@mantine/core";
import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" fullWidth loading={pending} mt="xl">
      Crear cuenta
    </Button>
  );
}
