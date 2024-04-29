"use client";

import { redirect } from "next/navigation";
import { useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";
import toast from "react-hot-toast";
import { TextInput, PasswordInput, Paper } from "@mantine/core";
// Components
import { createClient } from "@/utils/supabase/client";
import SubmitButton from "@/app/_components/formInputs/SubmitButton";
import { schema } from "./schema";

export default function Login() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      lastName: "",
      email: "",
      password: "",
      confirm: "",
    },
    validate: zodResolver(schema),
  });

  const clientAction = async (formData: FormData) => {
    // Validate input
    if (form.validate().hasErrors) return;
    // Process form
    const supabase = createClient();
    const { error } = await supabase.auth.signUp({
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      options: {
        data: {
          name: formData.get("name"),
          lastName: formData.get("lastName"),
          displayName: `${formData.get("name")} ${formData.get("lastName")}`,
        },
      },
    });
    if (error) return toast.error("Error al registrar a nuevo usario");
    redirect("/exito-registro");
  };

  return (
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
        <SubmitButton text="Crear cuenta" fullWidth={true} mt="xl" />
      </Paper>
    </form>
  );
}
