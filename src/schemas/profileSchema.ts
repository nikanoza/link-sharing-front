import * as Yup from "yup";
import { ProfileType } from "../types";

const profileSchema = Yup.object<ProfileType>().shape({
  email: Yup.string().email("must be email format").required("can't be empty"),
  firstName: Yup.string().trim().required("can't be empty"),
  lastName: Yup.string().trim().required("can't be empty"),
});

export default profileSchema;
