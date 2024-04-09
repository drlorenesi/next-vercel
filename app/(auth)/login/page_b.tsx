"use client";

import Link from "next/link";
import { zodResolver } from "mantine-form-zod-resolver";
import { useForm } from "@mantine/form";

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
  Button,
} from "@mantine/core";

import { LoginSchema } from "./schema";
// import { serverAction } from "./actions";

import classes from "./page.module.css";

export default function Login() {
  const form = useForm({
    initialValues: {
      email: "",
      pass: "",
    },
    validate: zodResolver(LoginSchema),
  });

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
      <form onSubmit={form.onSubmit(console.log)}>
        <Paper withBorder shadow="md" p={25} mt={20} radius="md">
          <TextInput
            label="Email"
            placeholder="tu@granada.com.gt"
            autoComplete="email"
            {...form.getInputProps("email")}
          />
          <PasswordInput
            label="Contraseña"
            placeholder="Tu contraseña"
            mt="md"
            {...form.getInputProps("pass")}
          />
          <Group justify="space-between" mt="lg">
            <Checkbox label="Recordarme" />
            <Anchor component={Link} href="/solicitar" size="sm">
              ¿Olvidaste tu contraseña?
            </Anchor>
          </Group>
          <Button type="submit" fullWidth mt="xl">
            Iniciar sesión
          </Button>
        </Paper>
      </form>
    </Container>
  );
}
