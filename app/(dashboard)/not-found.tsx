import Link from "next/link";
import { Title, Text, Button, Container, Group } from "@mantine/core";
import classes from "./not-found.module.css";

export default function NotFoundTitle() {
  return (
    <Container className={classes.root}>
      <div className={classes.label}>404</div>
      <Title className={classes.title}>Encontraste un lugar secreto.</Title>
      <Text c="dimmed" size="lg" ta="center" className={classes.description}>
        Desafortunadamente, no encontramos el recurso que buscas.
      </Text>
      <Group justify="center">
        <Button variant="subtle" size="md" component={Link} href="/">
          Regresar a Inicio
        </Button>
      </Group>
    </Container>
  );
}
