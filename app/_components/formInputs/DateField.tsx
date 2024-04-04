"use client";

import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { DateInput } from "@mantine/dates";

// It is required to extend dayjs with customParseFormat plugin
// in order to parse dates with custom format
dayjs.extend(customParseFormat);

export default function DateField() {
  return (
    <DateInput
      clearable
      valueFormat="DD/MM/YYYY"
      label="Start Date"
      placeholder="Pick date"
    />
  );
}
