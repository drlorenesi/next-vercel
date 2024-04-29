import type { Metadata } from "next";
import { Title, Text, Container } from "@mantine/core";

import classes from "../auth.module.css";
import Form from "./form";

export const metadata: Metadata = {
  title: "Solicitar reinicio de contraseña",
};

export default function Solicitar() {
  return (
    <Container size={460} my={20}>
      <Title className={classes.subTitle} ta="center">
        ¿Olvidaste tu contraseña?
      </Title>
      <Text c="dimmed" fz="sm" ta="center">
        Por favor ingresa el correo electrónico que usaste para crear tu cuenta.
      </Text>
      <Form />
    </Container>
  );
}
