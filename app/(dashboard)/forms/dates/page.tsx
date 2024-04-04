"use client";

import { Grid, Title, Divider } from "@mantine/core";
import DateField from "@/app/_components/formInputs/DateField";

export default function Dates() {
  return (
    <>
      <Title order={2}>Dates</Title>
      <Grid>
        <Grid.Col span={{ base: 12, xs: 5 }}>
          <DateField />
          <DateField />
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 7 }}></Grid.Col>
      </Grid>
      <Divider my="md" />
      <Grid>
        <Grid.Col span={{ base: 12, xs: 12 }}>Row 2</Grid.Col>
      </Grid>
    </>
  );
}
