import * as Yup from "yup";

import {
  pictureSizeLimitBit,
  pictureSizeLimitBite,
  pictureSizeLimitMb,
} from "../constants/constants";

const maxSize = pictureSizeLimitMb * pictureSizeLimitBite * pictureSizeLimitBit;
const allowedExtensions = ["image/png", "image/jpeg"];

export const formSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .matches(/^[A-Z]/, "The name must start with a capital letter")
    .matches(/^[A-Za-z]+$/, "The name must contain only English letters"),
  age: Yup.number()
    .required("Age is required")
    .positive("Age must be a positive number")
    .integer("Age must be an integer")
    .typeError("Age cannot be empty"),
  email: Yup.string().email("Incorrect email format").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .test("has-uppercase", "The password must contain at least one capital letter", (value) =>
      /[A-Z]/.test(value),
    )
    .test("has-lowercase", "The password must contain at least one lowercase letter", (value) =>
      /[a-z]/.test(value),
    )
    .test("has-number", "The password must contain at least one number", (value) =>
      /\d/.test(value),
    )
    .test("has-special", "The password must contain at least one special character", (value) =>
      /[$@!%*?&]/.test(value),
    ),
  confirmPassword: Yup.string()
    .required("Password confirmation is required")
    .oneOf([Yup.ref("password")], "Passwords must match"),
  gender: Yup.string().required("Gender is required"),
  country: Yup.string().required("Country is required"),
  picture: Yup.mixed()
    .required("Picture is required")
    .test("fileSize", "The file must be less than 5 MB", (value) => {
      if (!(value instanceof FileList) || value.length === 0) {
        return true;
      }
      const file = value[0];
      return file.size <= maxSize;
    })
    .test("fileFormat", "The file must be of type PNG or JPEG", (value) => {
      if (!(value instanceof FileList) || value.length === 0) {
        return true;
      }
      const file = value[0];
      return allowedExtensions.includes(file.type);
    }),
  terms: Yup.bool().oneOf([true], "You must agree to the terms"),
});
