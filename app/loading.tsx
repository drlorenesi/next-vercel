import { LoadingOverlay } from "@mantine/core";

export default function Loading() {
  // Note that position: relative is required
  return (
    <LoadingOverlay
      visible
      zIndex={1000}
      overlayProps={{ radius: "sm", blur: 2 }}
      loaderProps={{ color: "grey" }}
    />
  );
}
