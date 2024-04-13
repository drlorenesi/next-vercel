import { Button, Title } from "@mantine/core";

export default async function Home() {
  return (
    <>
      <Title order={2}>Dashboard</Title>
      <Button component="a" href="/login">
        Login
      </Button>
    </>
  );
}
