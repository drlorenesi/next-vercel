"use client";

import { Button } from "@mantine/core";
import { useFormStatus } from "react-dom";

import classes from "./page.module.css";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className={classes.control} loading={pending}>
      Solicitar reinicio
    </Button>
  );
}
