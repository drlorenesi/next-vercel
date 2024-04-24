"use client";

import Link from "next/link";
import { redirect } from "next/navigation";
import { useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";

import {
  Paper,
  Title,
  Text,
  PasswordInput,
  Container,
  Group,
  Anchor,
  Center,
  Box,
  rem,
} from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import SubmitButton from "./submit-button";

import { ChangeSchema } from "./schema";

import classes from "./page.module.css";

export default function Solicitar() {
  const form = useForm({
    // mode: "uncontrolled",
    initialValues: {
      password: "",
      confirmPass: "",
    },
    validate: zodResolver(ChangeSchema),
  });
  const clientAction = async (formData: FormData) => {
    if (form.validate().hasErrors) return;
    // Process form
    const password = formData.get("password") as string;
    const confirmPass = formData.get("confirmPass") as string;
    console.log("Form submitted!", password, confirmPass);
    form.reset();
    redirect("/gracias");
  };
  return (
    <Container size={460} my={20}>
      <Title className={classes.title} ta="center">
        Reiniciar contraseña
      </Title>
      <Text c="dimmed" fz="sm" ta="center">
        Por favor ingresa tu nueva contraseña.
      </Text>

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
            <SubmitButton />
          </Group>
        </Paper>
      </form>
    </Container>
  );
}
