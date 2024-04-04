import Link from "next/link";
import { Button, Text, Title } from "@mantine/core";

export default function Verificar() {
  return (
    <>
      <Title order={2}>Error 😖...</Title>
      <Text>Por favor revisa tu enlace e intenta de nuevo.</Text>
      <Button component={Link} href="/solicitar">
        ¿Olvidaste tu contraseña?
      </Button>
    </>
  );
}
