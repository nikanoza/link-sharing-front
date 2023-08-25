import * as Yup from "yup";
import { LoginType } from "../types";

const loginSchema = Yup.object<LoginType>({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

export default loginSchema;
