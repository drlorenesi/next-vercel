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

interface InputPropsWithKey
  extends ReturnType<UseFormReturnType<any>["getInputProps"]> {
  key: string;
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
  const inputProps = form.getInputProps(name);
  const { key, ...otherInputProps } = inputProps as InputPropsWithKey;

  return (
    <DateInput
      clearable={clearable}
      valueFormat={valueFormat}
      label={label}
      placeholder={placeholder}
      name={name}
      {...otherInputProps}
      mb={mb}
      key={key}
    />
  );
}
