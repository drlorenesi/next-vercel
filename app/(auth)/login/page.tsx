import Link from "next/link";
import type { Metadata } from "next";
import { Anchor, Title, Text, Container } from "@mantine/core";

import Form from "./form";
import classes from "../auth.module.css";

export const metadata: Metadata = {
  title: "Inicio de sesión",
};

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
      <Form />
    </Container>
  );
}
