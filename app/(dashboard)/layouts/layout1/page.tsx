"use client";

import { Divider, Grid, Loader, Skeleton, Title } from "@mantine/core";

const child = <Skeleton height={140} radius="md" animate={false} />;

export default function Layout1() {
  return (
    <>
      <Title order={2}>Layout 1</Title>
      <Grid>
        <Grid.Col span={{ base: 12, xs: 5 }}>{child}</Grid.Col>
        <Grid.Col span={{ base: 12, xs: 7 }}>{child}</Grid.Col>
      </Grid>
      <Divider my="sm" />
      {/* Loader Component */}
      <Grid>
        <Grid.Col
          span={12}
          style={{
            display: "grid",
            placeItems: "center",
            height: "50vh", // Half the viewport height
            width: "50vw", // Half the viewport width
          }}
        >
          <Loader color="gray" />
        </Grid.Col>
      </Grid>
    </>
  );
}
