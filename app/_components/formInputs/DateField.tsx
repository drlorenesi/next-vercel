import { DateInput } from "@mantine/dates";
import { UseFormReturnType } from "@mantine/form";
import "dayjs/locale/es";

interface DateFieldProps {
  clearable: boolean;
  valueFormat: string;
  label: string;
  placeholder: string;
  name: string;
  form: UseFormReturnType<any>;
  mb?: string;
}

export default function DateField({
  clearable,
  valueFormat,
  label,
  placeholder,
  name,
  form,
  mb,
}: DateFieldProps) {
  return (
    <DateInput
      clearable={clearable}
      valueFormat={valueFormat}
      label={label}
      placeholder={placeholder}
      name={name}
      {...form.getInputProps(name)}
      mb={mb}
    />
  );
}
