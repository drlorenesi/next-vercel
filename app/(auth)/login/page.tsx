"use client";

import Link from "next/link";
import { redirect } from "next/navigation";
import { useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";
import toast from "react-hot-toast";

import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
} from "@mantine/core";

import { createClient } from "@/utils/supabase/client";
import SubmitButton from "./submit-button";
import { LoginSchema } from "./schema";

import classes from "./page.module.css";

export default function Login() {
  const form = useForm({
    // mode: "uncontrolled",
    initialValues: {
      email: "",
      pass: "",
    },
    validate: zodResolver(LoginSchema),
  });

  const clientAction = async (formData: FormData) => {
    if (form.validate().hasErrors) return;
    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({
      email: formData.get("email") as string,
      password: formData.get("pass") as string,
    });

    if (error?.status === 400) {
      toast.error("Credenciales inválidas");
      return;
    }
    toast.success("Sesión iniciada!");
    redirect("/");
  };

  return (
    <Container size={420} my={20}>
      <Title ta="center" className={classes.title}>
        Iniciar Sesión
      </Title>
      <Text c="dimmed" size="sm" ta="center">
        ¿No tienes cuenta?{" "}
        <Anchor component={Link} href="/registro" size="sm">
          Registrate aquí.
        </Anchor>
      </Text>

      <form action={clientAction}>
        <Paper withBorder shadow="md" p={25} mt={20} radius="md">
          <TextInput
            name="email"
            label="Email"
            placeholder="tu@granada.com.gt"
            {...form.getInputProps("email")}
          />
          <PasswordInput
            name="pass"
            label="Contraseña"
            placeholder="Tu contraseña"
            {...form.getInputProps("pass")}
            mt="md"
          />
          <Group justify="space-between" mt="lg">
            <Checkbox label="Recordarme" />
            <Anchor component={Link} href="/solicitar" size="sm">
              ¿Olvidaste tu contraseña?
            </Anchor>
          </Group>
          <SubmitButton />
        </Paper>
      </form>
    </Container>
  );
}
