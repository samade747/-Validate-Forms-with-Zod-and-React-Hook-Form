import { FieldError, UseFormRegister } from "react-hook-form";
// Importing types from `react-hook-form`:
// - `FieldError`: Represents errors for a specific form field.
// - `UseFormRegister`: A function to connect input fields to the form's state.

import { z, ZodType } from "zod";
// Importing `z` and `ZodType` from `zod`:
// - `z`: A utility to create validation schemas.
// - `ZodType`: Represents the type of a Zod schema.

export type FormData = {
  email: string;             // The email field, which will store a string.
  githubUrl: string;         // The GitHub URL field, which will store a string.
  yearsOfExperience: number; // The years of experience field, which will store a number.
  password: string;          // The password field, which will store a string.
  confirmPassword: string;   // The confirm password field, which will store a string.
};
// `FormData` defines the structure of the data in the form (what fields it has and their types).

export const UserSchema: ZodType<FormData> = z
  .object({
    email: z.string().email(),
    // Validates that the `email` field is a string and follows a valid email format.

    githubUrl: z
      .string()
      .url() // Validates that the `githubUrl` is a valid URL.
      .includes("github.com", { message: "Invalid GitHub URL" }),
      // Ensures the URL contains "github.com". If not, it will show the message "Invalid GitHub URL".

    yearsOfExperience: z
      .number({
        required_error: "required field",
        // If the field is missing, it will show the message "required field".

        invalid_type_error: "Years of Experience is required",
        // If the value is not a number, it will show this error.
      })
      .min(1) // The minimum value allowed is 1.
      .max(10), // The maximum value allowed is 10.

    password: z
      .string() // The `password` field must be a string.
      .min(8, { message: "Password is too short" })
      // The password must be at least 8 characters long. Otherwise, it shows "Password is too short".

      .max(20, { message: "Password is too long" }),
      // The password cannot be longer than 20 characters. Otherwise, it shows "Password is too long".

    confirmPassword: z.string(),
    // The `confirmPassword` field must also be a string.
  })
  .refine((data) => data.password === data.confirmPassword, {
    // This ensures that the `password` and `confirmPassword` fields match.

    message: "Passwords do not match",
    // If the passwords do not match, it shows this error message.

    path: ["confirmPassword"], // The error will be associated with the `confirmPassword` field.
  });
// `UserSchema` defines the rules for validating the form fields using Zod.

export type FormFieldProps = {
  type: string; // The type of the input field (e.g., "text", "email", "password").
  placeholder: string; // The placeholder text to show inside the input field.
  name: ValidFieldNames; // The name of the field (must match one of the fields in `ValidFieldNames`).
  register: UseFormRegister<FormData>; // A function to link this field to the form's state using `react-hook-form`.
  error: FieldError | undefined; // Any error associated with this field (if validation fails).
  valueAsNumber?: boolean; // If true, the value of this field will be treated as a number.
};
// `FormFieldProps` defines the expected structure of the properties passed to a form field.

export type ValidFieldNames =
  | "email"              // Represents the `email` field.
  | "githubUrl"          // Represents the `githubUrl` field.
  | "yearsOfExperience"  // Represents the `yearsOfExperience` field.
  | "password"           // Represents the `password` field.
  | "confirmPassword";   // Represents the `confirmPassword` field.
// `ValidFieldNames` defines the list of all valid field names in the form.
