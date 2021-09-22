import * as yup from "yup";
//construct a schema

export const loginFormSchema = yup.object().shape({
  username: yup
    .string()
    .trim()
    .required("Username is required")
    .min(5, "Username must be at least five characters long"),
  password: yup
    .string()
    .required("Password is required")
    .min(5, "Password must be at least five characters long"),
  //????????????????????????????????????????
  //should below linges be deleted??????????
  // accounttype: yup
  //   .string()
  //   .required("select an account type")
  //   .notOneOf([""])
  //   .oneOf(["student", "instructor"]),
  //????????????????????????????????????????
});
export const registrationFormSchema = yup.object().shape({
  username: yup
    .string()
    .trim()
    .required("Username is required")
    .min(5, "Username must be at least five characters long"),
  email: yup
    .string()
    .trim()
    .required("Email is required")
    .min(5, "Email must be at least five character long"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least five characters long"),
  role_id: yup
    .string()
    .required("select an account type")
    .notOneOf([""])
    .oneOf(["2", "1"], "Must select`Student` or `Instructor`"),
});

export const profileFormSchema = yup.object().shape({
  username: yup
    .string()
    .trim()
    .required("Username is required")
    .min(5, "Username must be at least five characters long"),
  password: yup
    .string()
    .required("Password is required")
    .min(5, "Password must be at least five characters long"),
  name: yup.string().required("Name is required"),
  email: yup.string().required("E-mail is required"),
  birthdate: yup.string().required("Birthdate is required"),
  address: yup.string().required("Address is required"),
  city: yup.string().required("City is required"),
  state: yup.string().required("State is required"),
  zipcode: yup
    .string()
    .required("Zipcode is required")
    .max(5, "Max length of zipcode is 5 number")
    .min(5, "Min length of zipcode is 5 number"),
});

export const schema_validate_input = (
  input_schema,
  input_name,
  input_value,
  input_stateValidationText,
  input_set_stateValidationText
) => {
  yup
    .reach(input_schema, input_name)
    .validate(input_value)
    .then(() => {
      //return validation success
      input_set_stateValidationText({
        ...input_stateValidationText,
        [input_name]: "",
      });
    })
    .catch((err) => {
      //return validation failure
      input_set_stateValidationText({
        ...input_stateValidationText,
        [input_name]: err.errors[0],
      });
    });
};

export const schema_validate_form = (
  input_schema,
  input_stateFormData,
  input_set_stateFormValidationBoolean
) => {
  input_schema.isValid(input_stateFormData).then((valid) => {
    input_set_stateFormValidationBoolean(valid);
  });
};
