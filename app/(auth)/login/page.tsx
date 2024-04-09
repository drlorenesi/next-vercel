"use client";

import Link from "next/link";
import { useFormState } from "react-dom";

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

import { serverAction } from "./actions";

import classes from "./page.module.css";

export default function Login() {
  const [state, formAction] = useFormState(serverAction, null);

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

      <form action={formAction}>
        <Paper withBorder shadow="md" p={25} mt={20} radius="md">
          <TextInput
            name="email"
            label="Email"
            placeholder="tu@granada.com.gt"
            error={state?.errors?.email}
          />
          <PasswordInput
            name="pass"
            label="Contraseña"
            placeholder="Tu contraseña"
            error={state?.errors?.pass}
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
