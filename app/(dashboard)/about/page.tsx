import Link from "next/link";
import { Button, Title } from "@mantine/core";

export default function About() {
  return (
    <>
      <Title order={2}>About Page</Title>
      <Button component={Link} href="/">
        Back to Home
      </Button>
    </>
  );
}
