import * as Yup from "yup";
import { LoginType } from "../types";

const loginSchema = Yup.object<LoginType>().shape({
  email: Yup.string().email("must be email format").required("can't be empty"),
  password: Yup.string().required("can't be empty"),
});

export default loginSchema;
