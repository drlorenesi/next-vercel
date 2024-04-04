import { Loader, Stack } from "@mantine/core";

export default function Loading() {
  return (
    <>
      <Stack h={300} align="center" justify="flex-end">
        <Loader color="gray" />
      </Stack>
    </>
  );
}
