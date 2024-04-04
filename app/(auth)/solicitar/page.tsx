import Link from "next/link";
import {
  Paper,
  Title,
  Text,
  TextInput,
  Button,
  Container,
  Group,
  Anchor,
  Center,
  Box,
  rem,
} from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { handleSubmit } from "./actions";

import classes from "./page.module.css";

export default function Solicitar() {
  return (
    <Container size={460} my={20}>
      <Title className={classes.title} ta="center">
        ¿Olvidaste tu contraseña?
      </Title>
      <Text c="dimmed" fz="sm" ta="center">
        Por favor ingresa el correo electrónico que usaste para crear tu cuenta.
      </Text>

      <form action={handleSubmit}>
        <Paper withBorder shadow="md" p={25} radius="md" mt="xl">
          <TextInput label="Email" placeholder="yo@granada.com.gt" />
          <Group justify="space-between" mt="lg" className={classes.controls}>
            <Anchor
              c="dimmed"
              size="sm"
              className={classes.control}
              component={Link}
              href="/login"
            >
              <Center inline>
                <IconArrowLeft
                  style={{ width: rem(12), height: rem(12) }}
                  stroke={1.5}
                />
                <Box ml={5}>Regresar a inicio</Box>
              </Center>
            </Anchor>
            <Button type="submit" className={classes.control}>
              Solicitar reinicio
            </Button>
          </Group>
        </Paper>
      </form>
    </Container>
  );
}
