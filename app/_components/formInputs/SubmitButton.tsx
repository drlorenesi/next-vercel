"use client";

import { Button } from "@mantine/core";
import { useFormStatus } from "react-dom";

interface SubmitButtonProps {
  text: string;
  fullWidth?: boolean;
  mt?: string;
}

export default function SubmitButton({
  text,
  fullWidth,
  mt,
}: SubmitButtonProps) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" loading={pending} fullWidth={fullWidth} mt={mt}>
      {text}
    </Button>
  );
}
