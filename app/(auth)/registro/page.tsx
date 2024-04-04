import Link from "next/link";

import {
  TextInput,
  PasswordInput,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Button,
} from "@mantine/core";
import classes from "./page.module.css";

export default function Login() {
  return (
    <Container size={420} my={20}>
      <Title ta="center" className={classes.title}>
        Regístrate
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        ¿Ya tienes cuenta?{" "}
        <Anchor component={Link} href="/login" size="sm">
          Inicia sesión aquí.
        </Anchor>
      </Text>
      <Paper withBorder shadow="md" p={25} mt={20} radius="md">
        <TextInput label="Nombre" placeholder="Tu nombre" required />
        <TextInput
          label="Apellido"
          placeholder="Tu apellido"
          required
          mt="xs"
        />
        <TextInput
          label="Email"
          placeholder="tu@granada.com.gt"
          required
          mt="xs"
        />
        <PasswordInput
          label="Contraseña"
          placeholder="Tu contraseña"
          required
          mt="xs"
        />
        <PasswordInput
          label="Confirma tu contraseña"
          placeholder="Confirma tu contraseña"
          required
          mt="xs"
        />

        <Button fullWidth mt="xl">
          Crear cuenta
        </Button>
      </Paper>
    </Container>
  );
}
