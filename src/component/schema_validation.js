import * as yup from "yup";
//construct a schema

export const loginFormSchema = yup.object().shape({
  username: yup
    .string()
    .trim()
    .required("username is required")
    .min(5, "username must be at least five alphanumeric"),
  password: yup
    .string()
    .required("password is required")
    .min(5, "password must be at least 5 alphanumeric"),
  accounttype: yup
    .string()
    .required("select an account type")
    .notOneOf([""])
    .oneOf(["student", "instructor"]),
});

export const profileFormSchema = yup.object().shape({
  username: yup
    .string()
    .trim()
    .required("username is required")
    .min(5, "username must be at least five alphanumeric"),
  password: yup
    .string()
    .required("password is required")
    .min(5, "password must be at least 5 alphanumeric"),
  name: yup.string().required("name is required"),
  email: yup.string().required("email is required"),
  birthdate: yup.string().required("birthdatate is required"),
  address: yup.string().required("address is required"),
  city: yup.string().required("city is required"),
  state: yup.string().required("state is required"),
  zipcode: yup
    .string()
    .required("zipcode is required")
    .max(5, "max length of zipcode is 5 number")
    .min(5, "min length of zipcode is 5 number"),
});

export const schema_validate_input = (
  input_schema,
  input_name,
  input_value,
  input_stateValidation,
  input_set_stateValidation
) => {
  yup
    .reach(input_schema, input_name)
    .validate(input_value)
    .then(() => {
      //return validation success
      input_set_stateValidation({ ...input_stateValidation, [input_name]: "" });
    })
    .catch((err) => {
      //return validation failure
      input_set_stateValidation({
        ...input_stateValidation,
        [input_name]: err.errors[0],
      });
    });
};

export const schema_validate_form = (
  input_schema,
  input_stateFormData,
  input_set_stateFormValidation
) => {
  input_schema.isValid(input_stateFormData).then((valid) => {
    input_set_stateFormValidation(valid);
  });
};
