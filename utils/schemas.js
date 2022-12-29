import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, "Enter Your Full Name")
    .required("Enter Your Name!"),
  email: Yup.string().email("Invalid email").required("Enter Your Email!"),
  password: Yup.string()
    .min(4, "Password is too short")
    .required("Enter Your Password!"),
  confirmPassword: Yup.string()
    .min(4, "Password is too short")
    .oneOf([Yup.ref("password")], "Passwords Must Match")
    .required("Enter Your Password!"),
  phoneNumber: Yup.string().min(9, "Must be exactly 9 numbers").max(9, "Must be exactly 9 numbers").required("Enter Your Phone Number!")
})