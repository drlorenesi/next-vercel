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
  Group,
} from "@mantine/core";
// Components
import { createClient } from "@/utils/supabase/client";
import { schema } from "./schema";
import SubmitButton from "@/app/_components/formInputs/SubmitButton";

export default function Login() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      pass: "",
    },
    validate: zodResolver(schema),
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
        <SubmitButton text="Iniciar sesión" fullWidth={true} mt="xl" />
      </Paper>
    </form>
  );
}
