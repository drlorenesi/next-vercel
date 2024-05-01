import { z } from "zod";

export const DateSchema = z
  .object({
    startDate: z
      .date({
        required_error: "Please select a date and time",
        invalid_type_error: "Please enter a date",
      })
      .min(new Date("2017-01-01"), { message: "No dates before 2017" })
      .max(new Date("2030-01-01"), { message: "No dates after 2030" }),
    endDate: z
      .date({
        required_error: "Please select a date and time",
        invalid_type_error: "Please enter a date",
      })
      .max(new Date("2030-01-01"), { message: "No dates after 2030" })
      .min(new Date("2017-01-01"), { message: "No dates before 2017" }),
  })
  .refine((data) => data.startDate <= data.endDate, {
    message: "startDate must not be after endDate",
    path: ["startDate"],
  });

// extract the inferred type
export type DateType = z.infer<typeof DateSchema>;
