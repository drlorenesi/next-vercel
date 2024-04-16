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

export const DateField: React.FC<DateFieldProps> = ({
  clearable,
  valueFormat,
  label,
  placeholder,
  name,
  form,
  mb,
}) => {
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
};
