import { Title, Text, Container } from "@mantine/core";

import Form from "./form";
import classes from "../auth.module.css";

export default function Solicitar() {
  return (
    <Container size={460} my={20}>
      <Title className={classes.title} ta="center">
        Reiniciar contraseña
      </Title>
      <Text c="dimmed" fz="sm" ta="center">
        Por favor ingresa tu nueva contraseña.
      </Text>
      <Form />
    </Container>
  );
}
