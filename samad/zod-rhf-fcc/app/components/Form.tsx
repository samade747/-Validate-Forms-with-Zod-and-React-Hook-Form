import { useForm } from "react-hook-form"; 
// Importing `useForm` from `react-hook-form` to manage form state and handle validation.

import { FormData, UserSchema, ValidFieldNames } from "@/types"; 
// Importing custom types: `FormData` (for form structure), `UserSchema` (validation schema), and `ValidFieldNames` (valid field names).

import { zodResolver } from "@hookform/resolvers/zod"; 
// Importing the `zodResolver` to integrate Zod validation with `react-hook-form`.

import axios from "axios"; 
// Importing `axios` for making HTTP requests.

import FormField from "./FormField"; 
// Importing a reusable `FormField` component to render individual input fields.

function Form() {
  // The main `Form` component definition.

  const {
    register, 
    handleSubmit, 
    formState: { errors }, 
    setError,
  } = useForm<FormData>({
    resolver: zodResolver(UserSchema), 
    // Initialize `useForm` with the `zodResolver` to use Zod for form validation.
  });

  // Function to handle form submission.
  const onSubmit = async (data: FormData) => {
    // `data` contains all the form values submitted by the user.
    try {
      const response = await axios.post("/api/form", data); 
      // Make a POST request to the `/api/form` endpoint with the form data.

      const { errors = {} } = response.data; 
      // Extract the `errors` object from the server response (default to an empty object if not present).

      const fieldErrorMapping: Record<string, ValidFieldNames> = {
        email: "email",
        githubUrl: "githubUrl",
        yearsOfExperience: "yearsOfExperience",
        password: "password",
        confirmPassword: "confirmPassword",
      };
      // Map server-side field names to client-side field names. This ensures consistency.

      const fieldWithError = Object.keys(fieldErrorMapping).find(
        (field) => errors[field]
      );
      // Check if any of the mapped fields have errors returned from the server.

      if (fieldWithError) {
        setError(fieldErrorMapping[fieldWithError], {
          type: "server",
          message: errors[fieldWithError],
        });
        // Use `setError` to set a specific error message for the corresponding field in the form.
      }
    } catch (error) {
      alert("Submitting form failed!");
      // Show an alert if the form submission fails (e.g., due to network issues).
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Render the form and attach the `onSubmit` handler using `handleSubmit`. */}

      <div className="grid col-auto">
        {/* A container to group the form fields with grid layout. */}
        
        <h1 className="text-3xl font-bold mb-4">Zod & React-Hook-Form</h1>
        {/* A heading for the form. */}

        <FormField
          type="email"
          placeholder="Email"
          name="email"
          register={register}
          error={errors.email}
        />
        {/* Render an input field for email using the reusable `FormField` component. 
        Pass props for field type, placeholder, name, `register` for binding the field, and validation errors. */}

        <FormField
          type="text"
          placeholder="GitHub URL"
          name="githubUrl"
          register={register}
          error={errors.githubUrl}
        />
        {/* Input field for GitHub URL with similar props as above. */}

        <FormField
          type="number"
          placeholder="Years of Experience (1 - 10)"
          name="yearsOfExperience"
          register={register}
          error={errors.yearsOfExperience}
          valueAsNumber
        />
        {/* Input field for years of experience. `valueAsNumber` ensures the value is treated as a number. */}

        <FormField
          type="password"
          placeholder="Password"
          name="password"
          register={register}
          error={errors.password}
        />
        {/* Input field for password. */}

        <FormField
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          register={register}
          error={errors.confirmPassword}
        />
        {/* Input field for confirming the password. */}

        <button type="submit" className="submit-button">
          Submit
        </button>
        {/* Submit button for the form. */}
      </div>
    </form>
  );
  // Close the form and its container.
}

export default Form;
// Export the `Form` component for use in other parts of the application.




// import { useForm } from "react-hook-form";
// import { FormData, UserSchema, ValidFieldNames } from "@/types";
// // import FormField from "./FormField";
// import { zodResolver } from "@hookform/resolvers/zod";
// import axios from "axios";
// import FormField from "./FormField";

// function Form() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     setError,
//   } = useForm<FormData>({
//     resolver: zodResolver(UserSchema), // Apply the zodResolver
/*************  ✨ Codeium Command ⭐  *************/
  /**
   * Handles the form submission. Makes a POST request to the server with the
   * form data. If the request is successful, it checks if there are any errors
   * returned by the server. If there are errors, it updates the form error state
   * using setError. If the request fails, it shows an alert with an error message.
/******  495e7751-69fc-49b6-b225-003fa6f887d1  *******///   });

 


//   const onSubmit = async (data: FormData) => {
//     try {
//       const response = await axios.post("/api/form", data); // Make a POST request
//       const { errors = {} } = response.data; // Destructure the 'errors' property from the response data

//       // Define a mapping between server-side field names and their corresponding client-side names
//       const fieldErrorMapping: Record<string, ValidFieldNames> = {
//         email: "email",
//         githubUrl: "githubUrl",
//         yearsOfExperience: "yearsOfExperience",
//         password: "password",
//         confirmPassword: "confirmPassword",
//       };

//       // Find the first field with an error in the response data
//       const fieldWithError = Object.keys(fieldErrorMapping).find(
//         (field) => errors[field]
//       );

//       // If a field with an error is found, update the form error state using setError
//       if (fieldWithError) {
//         // Use the ValidFieldNames type to ensure the correct field names
//         setError(fieldErrorMapping[fieldWithError], {
//           type: "server",
//           message: errors[fieldWithError],
//         });
//       }
//     } catch (error) {
//       alert("Submitting form failed!");
//     }
//   };

//   return (
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="grid col-auto">
//           <h1 className="text-3xl font-bold mb-4">
//             Zod & React-Hook-Form
//           </h1>
//           <FormField
//             type="email"
//             placeholder="Email"
//             name="email"
//             register={register}
//             error={errors.email}
//           />

//           <FormField
//             type="text"
//             placeholder="GitHub URL"
//             name="githubUrl"
//             register={register}
//             error={errors.githubUrl}
//           />

//           <FormField
//             type="number"
//             placeholder="Years of Experience (1 - 10)"
//             name="yearsOfExperience"
//             register={register}
//             error={errors.yearsOfExperience}
//             valueAsNumber
//           />

//           <FormField
//             type="password"
//             placeholder="Password"
//             name="password"
//             register={register}
//             error={errors.password}
//           />

//           <FormField
//             type="password"
//             placeholder="Confirm Password"
//             name="confirmPassword"
//             register={register}
//             error={errors.confirmPassword}
//           />
//           <button type="submit" className="submit-button">
//             Submit
//           </button>
//         </div>
//       </form>
//   );
// }


// export default Form;