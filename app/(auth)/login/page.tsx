"use client";

import Link from "next/link";
import { useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";

import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
} from "@mantine/core";

import SubmitButton from "./submit-button";

import { LoginSchema, LoginType } from "./schema";
import { serverAction } from "./actions";

import classes from "./page.module.css";

export default function Login() {
  const form = useForm({
    initialValues: {
      email: "",
      pass: "",
    },
    validate: zodResolver(LoginSchema),
  });

  const clientAction = async (formData: LoginType) => {
    const result = await serverAction(formData);
    console.log(result);
  };

  return (
    <Container size={420} my={20}>
      <Title ta="center" className={classes.title}>
        Iniciar Sesión
      </Title>
      <Text c="dimmed" size="sm" ta="center">
        ¿No tienes cuenta?{" "}
        <Anchor component={Link} href="/registro" size="sm">
          Registrate aquí.
        </Anchor>
      </Text>

      <form onSubmit={form.onSubmit((values) => clientAction(values))}>
        <Paper withBorder shadow="md" p={25} mt={20} radius="md">
          <TextInput
            name="email"
            label="Email"
            placeholder="tu@granada.com.gt"
            {...form.getInputProps("email")}
          />
          <PasswordInput
            name="pass"
            label="Contraseña"
            placeholder="Tu contraseña"
            {...form.getInputProps("pass")}
            mt="md"
          />
          <Group justify="space-between" mt="lg">
            <Checkbox label="Recordarme" />
            <Anchor component={Link} href="/solicitar" size="sm">
              ¿Olvidaste tu contraseña?
            </Anchor>
          </Group>
          <SubmitButton />
        </Paper>
      </form>
    </Container>
  );
}
