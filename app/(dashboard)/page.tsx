import { Button, Title } from "@mantine/core";

export default function Home() {
  return (
    <>
      <Title order={2}>Dashboard</Title>
      <Button component="a" href="/api/auth/login">
        Login
      </Button>
    </>
  );
}
