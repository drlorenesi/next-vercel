import Link from "next/link";
import type { Metadata } from "next";
import {
  Title,
  Text,
  Container,
  Group,
  Anchor,
  Center,
  Box,
  rem,
} from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import classes from "../auth.module.css";

export const metadata: Metadata = {
  title: "Cuenta verificada",
};

export default function Solicitar() {
  return (
    <Container size={460} my={20}>
      <Title className={classes.subTitle} ta="center">
        ¡Enhorabuena 👏! Tu cuenta ha sido verificada ✅.
      </Title>
      <Text c="dimmed" fz="sm" ta="center">
        Ahora podrás iniciar sesión.
      </Text>
      <Group justify="center" mt="lg">
        <Anchor c="dimmed" size="sm" component={Link} href="/login">
          <Center inline>
            <IconArrowLeft
              style={{ width: rem(12), height: rem(12) }}
              stroke={1.5}
            />
            <Box ml={5}>Regresar a inicio</Box>
          </Center>
        </Anchor>
      </Group>
    </Container>
  );
}
