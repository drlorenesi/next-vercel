"use client";

import { Grid, Title, Divider } from "@mantine/core";
import Form from "./form";

export default function Text() {
  return (
    <>
      <Title order={2}>Text</Title>
      <Grid>
        <Grid.Col span={{ base: 12, xs: 5 }}>
          <Form />
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 7 }}>Chart Space</Grid.Col>
      </Grid>
      <Divider my="md" />
      <Grid>
        <Grid.Col span={{ base: 12, xs: 12 }}>Output 2</Grid.Col>
      </Grid>
    </>
  );
}
