"use client";

import { Grid, Title, Divider } from "@mantine/core";
import { useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";
import dayjs from "dayjs";

import SubmitButton from "./submit-button";
import { DateSchema } from "./schema";
import { DateField } from "@/app/_components/formInputs/DateField";

export default function Dates() {
  const form = useForm({
    initialValues: {
      startDate: dayjs(new Date()).startOf("month").toDate(),
      endDate: dayjs(new Date()).toDate(),
    },
    validate: zodResolver(DateSchema),
  });

  const clientAction = async (formData: FormData) => {
    if (form.validate().hasErrors) return;
    const start = dayjs(formData.get("startDate") as string).format(
      "YYYY-MM-DD"
    );
    const end = dayjs(formData.get("endDate") as string).format("YYYY-MM-DD");
    console.log("Received values:");
    console.log({ start, end });
  };

  return (
    <>
      <Title order={2}>Dates</Title>
      <Grid>
        <Grid.Col span={{ base: 12, xs: 5 }}>
          <form action={clientAction}>
            {/* <DateInput
              clearable
              valueFormat="DD/MM/YYYY"
              label="Start Date"
              placeholder="Pick date"
              name="startDate"
              {...form.getInputProps("startDate")}
              mb="md"
            /> */}
            <DateField
              clearable
              valueFormat="DD/MM/YYYY"
              label="Start Date"
              placeholder="Pick date"
              name="startDate"
              form={form}
              mb="md"
            />
            <DateField
              clearable
              valueFormat="DD/MM/YYYY"
              label="End Date"
              placeholder="Pick date"
              name="endDate"
              form={form}
              mb="md"
            />
            <SubmitButton />
          </form>
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
