import Link from "next/link";
import type { Metadata } from "next";
import { Anchor, Title, Text, Container } from "@mantine/core";

import classes from "../auth.module.css";
import Form from "./form";

export const metadata: Metadata = {
  title: "Registro de usuario",
};

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
      <Form />
    </Container>
  );
}
