import Link from "next/link";

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
import classes from "./page.module.css";

export default function Login() {
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

      <Paper withBorder shadow="md" p={25} mt={20} radius="md">
        <TextInput label="Email" placeholder="tu@granada.com.gt" required />
        <PasswordInput
          label="Contraseña"
          placeholder="Tu contraseña"
          required
          mt="md"
        />
        <Group justify="space-between" mt="lg">
          <Checkbox label="Recordarme" />
          <Anchor component={Link} href="/solicitar" size="sm">
            ¿Olvidaste tu contraseña?
          </Anchor>
        </Group>
        <Button fullWidth mt="xl">
          Iniciar sesión
        </Button>
      </Paper>
    </Container>
  );
}
