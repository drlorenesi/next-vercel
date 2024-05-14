"use client";

import { Grid, Skeleton, Title } from "@mantine/core";

const child = <Skeleton height={140} radius="md" animate={false} />;

export default function Layout1() {
  return (
    <>
      <Title order={2}>Layout 2</Title>
      <Grid>
        <Grid.Col span={{ base: 12, xs: 4 }}>{child}</Grid.Col>
        <Grid.Col span={{ base: 12, xs: 8 }}>{child}</Grid.Col>
        <Grid.Col span={{ base: 12, xs: 12 }}>{child}</Grid.Col>
      </Grid>
    </>
  );
}
