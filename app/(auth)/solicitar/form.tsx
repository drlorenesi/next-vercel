"use client";

import Link from "next/link";
import { redirect } from "next/navigation";
import { useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";
import toast from "react-hot-toast";
import {
  Paper,
  TextInput,
  Group,
  Anchor,
  Center,
  Box,
  rem,
} from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
// Components
import { createClient } from "@/utils/supabase/client";
import SubmitButton from "@/app/_components/formInputs/SubmitButton";
import { schema } from "./schema";
// Classes
import classes from "../auth.module.css";

export default function Form() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
    },
    validate: zodResolver(schema),
  });

  const clientAction = async (formData: FormData) => {
    // Validate input
    if (form.validate().hasErrors) return;
    // Process form
    const supabase = createClient();
    const { error } = await supabase.auth.resetPasswordForEmail(
      formData.get("email") as string,
      { redirectTo: `${process.env.NEXT_PUBLIC_URL}reinicio` }
    );
    if (error) return toast.error("Error al soliticar reinicio");
    redirect("/exito-solicitud-reinicio");
  };

  return (
    <form action={clientAction}>
      <Paper withBorder shadow="md" p={25} radius="md" mt="xl">
        <TextInput
          name="email"
          label="Email"
          placeholder="tucorreo@granada.com.gt"
          {...form.getInputProps("email")}
        />
        <Group justify="space-between" mt="lg" className={classes.controls}>
          <Anchor
            c="dimmed"
            size="sm"
            className={classes.control}
            component={Link}
            href="/login"
          >
            <Center inline>
              <IconArrowLeft
                style={{ width: rem(12), height: rem(12) }}
                stroke={1.5}
              />
              <Box ml={5}>Regresar a inicio</Box>
            </Center>
          </Anchor>
          <SubmitButton text="Solicitar reinicio" />
        </Group>
      </Paper>
    </form>
  );
}
