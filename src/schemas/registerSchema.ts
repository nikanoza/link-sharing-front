import * as Yup from "yup";
import { RegisterType } from "../types";

const registerSchema = Yup.object<RegisterType>().shape({
  email: Yup.string().email("must be email format").required("can't be empty"),
  password: Yup.string()
    .trim()
    .min(8, "must be 8 characters or more")
    .max(15, "must be 15 characters or less")
    .required("can't be empty"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "passwords did not matched")
    .required("can't be empty"),
});

export default registerSchema;
