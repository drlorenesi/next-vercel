"use client";

import Link from "next/link";
import { redirect } from "next/navigation";
import { useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";
import {
  Paper,
  PasswordInput,
  Group,
  Anchor,
  Center,
  Box,
  rem,
} from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
// Components
import { createClient } from "@/utils/supabase/client";
import SubmitButton from "@/app/_components/formInputs/SubmitButton";
import { schema } from "./schema";
// Classes
import classes from "../auth.module.css";

export default function Solicitar() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      password: "",
      confirmPass: "",
    },
    validate: zodResolver(schema),
  });

  const clientAction = async (formData: FormData) => {
    // Validate input
    if (form.validate().hasErrors) return;
    // Process form
    const supabase = createClient();
    const password = formData.get("password") as string;
    const { error } = await supabase.auth.updateUser({
      password,
    });
    console.log(error);
    if (error) redirect("/error-verificacion");
    redirect("/exito-reinicio");
  };

  return (
    <form action={clientAction}>
      <Paper withBorder shadow="md" p={25} radius="md" mt="xl">
        <PasswordInput
          name="password"
          label="Contraseña"
          {...form.getInputProps("password")}
        />
        <PasswordInput
          name="confirmPass"
          label="Confirma tu contraseña"
          {...form.getInputProps("confirmPass")}
          mt="md"
        />
        <Group justify="space-between" mt="lg" className={classes.controls}>
          <Anchor
            c="dimmed"
            size="sm"
            className={classes.control}
            component={Link}
            href="/login"
          >
            <Center inline>
              <IconArrowLeft
                style={{ width: rem(12), height: rem(12) }}
                stroke={1.5}
              />
              <Box ml={5}>Regresar a inicio</Box>
            </Center>
          </Anchor>
          <SubmitButton text="Reiniciar contraseña" />
        </Group>
      </Paper>
    </form>
  );
}
