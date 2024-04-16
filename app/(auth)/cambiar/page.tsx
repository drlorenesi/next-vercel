"use client";

import Link from "next/link";
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
import { serverAction } from "./actions";

import classes from "./page.module.css";

export default function Solicitar() {
  const form = useForm({
    initialValues: {
      pass: "",
      confirmPass: "",
    },
    validate: zodResolver(ChangeSchema),
  });
  const clientAction = async (formData: FormData) => {
    if (form.validate().hasErrors) return;
    const result = await serverAction(formData);
    if (!result.success) return console.log("Server error...", result);
    // Process form
    console.log("Form submitted!", result);
    form.reset();
  };
  return (
    <Container size={460} my={20}>
      <Title className={classes.title} ta="center">
        Cambiar contraseña
      </Title>
      <Text c="dimmed" fz="sm" ta="center">
        Por favor ingresa tu nueva contraseña.
      </Text>

      <form action={clientAction}>
        <Paper withBorder shadow="md" p={25} radius="md" mt="xl">
          <PasswordInput
            name="pass"
            label="Contraseña"
            {...form.getInputProps("pass")}
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
