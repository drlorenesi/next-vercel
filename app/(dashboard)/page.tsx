import Link from "next/link";
import { Button, Title } from "@mantine/core";

export default function Home() {
  return (
    <>
      <Title order={2}>Dashboard</Title>
      <Button component={Link} href="/about">
        About
      </Button>
    </>
  );
}
