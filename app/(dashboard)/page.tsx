import { Button, Title } from "@mantine/core";
import { createClient } from "@/utils/supabase/server";

export default async function Home() {
  const supabase = createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  console.log(user?.user_metadata?.name, error);

  const handleLogout = async () => {
    "use server";
    const supabase = createClient();
    const result = await supabase.auth.signOut();
    console.log("Logging out...", result);
  };

  return (
    <>
      <Title order={2}>Dashboard</Title>
      <Button component="a" href="/login">
        Login
      </Button>
      <br />
      <br />
      <form action={handleLogout}>
        <Button type="submit" variant="light">
          Logout
        </Button>
      </form>
    </>
  );
}
