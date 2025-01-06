import { FormFieldProps } from "@/types";
// Importing the `FormFieldProps` type to define the expected props for the component.

const FormField: React.FC<FormFieldProps> = ({
  type,
  placeholder,
  name,
  register,
  error,
  valueAsNumber,
}) => (
  // Declaring the `FormField` component as a functional React component. 
  // It takes in props of type `FormFieldProps` and destructures them for use within the component.

  <>
    {/* React fragment used to wrap multiple elements without adding an extra DOM node. */}

    <input
      type={type}
      // Set the input field's type (e.g., text, email, password) dynamically based on the `type` prop.

      placeholder={placeholder}
      // Set the placeholder text for the input field using the `placeholder` prop.

      {...register(name, { valueAsNumber })}
      // Use the `register` function from `react-hook-form` to bind the input field to the form's state.
      // Pass the `name` prop to associate the field with its key in the form data.
      // Optionally include `valueAsNumber` if it's specified to handle numeric values.
    />

    {error && <span className="error-message">{error.message}</span>}
    {/* Conditionally render an error message if the `error` prop is provided. 
        Use `error.message` to display the specific error message for this field. */}
  </>
);

export default FormField;
// Export the `FormField` component for use in other parts of the application.
