"use client";

import Link from "next/link";
// import { revalidatePath } from "next/cache";
// import { redirect } from "next/navigation";
import { useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";
import toast from "react-hot-toast";

import {
  TextInput,
  PasswordInput,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
} from "@mantine/core";

import { createClient } from "@/utils/supabase/client";
import SubmitButton from "./submit-button";
import { RegisterSchema } from "./schema";

import classes from "./page.module.css";

export default function Login() {
  const form = useForm({
    initialValues: {
      name: "",
      lastName: "",
      email: "",
      password: "",
      confirm: "",
    },
    validate: zodResolver(RegisterSchema),
  });

  const clientAction = async (formData: FormData) => {
    if (form.validate().hasErrors) return;
    const supabase = createClient();
    const data = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };
    const { error } = await supabase.auth.signUp(data);

    if (error?.status === 500) {
      console.log(error);
      toast.error("Error al registrar a nuevo usario");
      return;
    }
    // revalidatePath("/", "layout");
    // redirect("/");
  };

  return (
    <Container size={420} my={20}>
      <Title ta="center" className={classes.title}>
        Regístrate
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        ¿Ya tienes cuenta?{" "}
        <Anchor component={Link} href="/login" size="sm">
          Inicia sesión aquí.
        </Anchor>
      </Text>

      <form action={clientAction}>
        <Paper withBorder shadow="md" p={25} mt={20} radius="md">
          <TextInput
            name="name"
            label="Nombre"
            placeholder="Tu nombre"
            {...form.getInputProps("name")}
          />
          <TextInput
            name="lastName"
            label="Apellido"
            placeholder="Tu apellido"
            {...form.getInputProps("lastName")}
            mt="xs"
          />
          <TextInput
            name="email"
            label="Email"
            placeholder="tu@granada.com.gt"
            {...form.getInputProps("email")}
            mt="xs"
          />
          <PasswordInput
            name="password"
            label="Contraseña"
            placeholder="Tu contraseña"
            {...form.getInputProps("password")}
            mt="xs"
          />
          <PasswordInput
            name="confirm"
            label="Confirma tu contraseña"
            placeholder="Confirma tu contraseña"
            {...form.getInputProps("confirm")}
            mt="xs"
          />
          <SubmitButton />
        </Paper>
      </form>
    </Container>
  );
}
