"use client";

import { useForm } from "@mantine/form";
import {
  Button,
  Code,
  Grid,
  Title,
  Divider,
  TextInput,
  PasswordInput,
} from "@mantine/core";

export default function Mixed() {
  const form = useForm({
    initialValues: {
      username: "",
      password: "",
    },
  });

  const handleSubmit = (values) => {
    // Here, you can send the form data to your backend API
    console.log(values);
    // Reset the form after submission
    form.reset();
  };

  return (
    <>
      <Title order={2}>Text</Title>
      <Grid>
        <Grid.Col span={{ base: 12, xs: 5 }}>
          <form onSubmit={form.onSubmit(handleSubmit)}>
            <TextInput
              label="Username"
              placeholder="Enter your username"
              {...form.getInputProps("username")}
              mb={15}
            />
            <PasswordInput
              label="Password"
              placeholder="Enter your password"
              {...form.getInputProps("password")}
              mb={30}
            />
            <Button type="submit">Login</Button>
          </form>
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 7 }}>
          {form.values ? <Code>JSON.stringify(form.values)</Code> : "nope"}
        </Grid.Col>
      </Grid>
      <Divider my="md" />
      <Grid>
        <Grid.Col span={{ base: 12, xs: 12 }}>Output 2</Grid.Col>
      </Grid>
    </>
  );
}
