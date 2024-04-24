"use client"; // Error components must be Client Components

import { Title, Text, Button, Container, Group } from "@mantine/core";
import { useEffect } from "react";

import classes from "./error.module.css";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <Container className={classes.root}>
      <div className={classes.label}>500</div>
      <Title className={classes.title}>Error de Servidor</Title>
      <Text c="dimmed" size="lg" ta="center" className={classes.description}>
        Lo sentimos, algo ha salido mal...
      </Text>
      <Group justify="center">
        <Button
          variant="outline"
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Intentar de nuevo
        </Button>
      </Group>
    </Container>
  );
}
