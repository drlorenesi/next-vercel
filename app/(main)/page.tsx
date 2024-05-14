import { Button, Title, Text } from "@mantine/core";
import { createClient } from "@/utils/supabase/server";

export default async function Home() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <>
      <Title order={2}>Dashboard</Title>
      <Text>Hola {user?.user_metadata.name}!</Text>
      <Button component="a" href="/login">
        Login
      </Button>
    </>
  );
}
