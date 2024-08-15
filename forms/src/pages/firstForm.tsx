import { useState } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import "./styles.css";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .matches(/^[A-Z]/, "The name must start with a capital letter"),
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
  picture: Yup.mixed().required("Picture is required"),
  terms: Yup.bool().oneOf([true], "You must agree to the terms"),
});

interface FormState {
  name: string;
  age: string;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
  country: string;
  picture: null | string;
  terms: boolean;
}

interface ErrorState {
  name?: string;
  age?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  gender?: string;
  country?: string;
  picture?: string;
  terms?: boolean;
}

export const FirstForm = () => {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    age: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    country: "",
    picture: null,
    terms: false,
  });
  const [errors, setErrors] = useState<ErrorState>({});
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = event.target;
    setFormState({
      ...formState,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const maxSize = 5 * 1024 * 1024;
      const allowedExtensions = ["image/png", "image/jpeg"];
      if (!allowedExtensions.includes(file.type) || file.size > maxSize) {
        setErrors({ ...errors, picture: "Error: Invalid file type or size." });
      } else {
        const reader = new FileReader();
        reader.onloadend = () => {
          if (reader.result) {
            const base64String = reader.result.toString();
            dispatch({ type: "SET_PICTURE", payload: base64String });
            setFormState({ ...form, picture: base64String });
          }
        };
        reader.readAsDataURL(file);
        setErrors((prevErrors) => ({ ...prevErrors, picture: "" }));
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await validationSchema.validate(formState, { abortEarly: false });
      setErrors({});
      dispatch({ type: "SUBMIT_FORM", payload: formState });
    } catch (err) {
      const validationErrors = {};
      err.inner.forEach((error: Error) => {
        validationErrors[error.path] = error.message;
      });
      setErrors(validationErrors);
    }
    if (Object.keys(errors).length === 0) {
      console.log("Form submitted");
    }
  };

  return (
    <>
      <h1>First Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form__item">
          <label>
            Name:
            <input type="text" name="name" value={formState.name} onChange={handleChange} />
            <p className="error">{errors.name}</p>
          </label>
        </div>
        <div className="form__item">
          <label>
            Age:
            <input type="number" name="age" value={formState.age} onChange={handleChange} />
            <p className="error">{errors.age}</p>
          </label>
        </div>
        <div className="form__item">
          <label>
            Email:
            <input type="email" name="email" value={formState.email} onChange={handleChange} />
            <p className="error">{errors.email}</p>
          </label>
        </div>
        <div className="form__item">
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={formState.password}
              onChange={handleChange}
            />
            <p className="error">{errors.password}</p>
          </label>
        </div>
        <div className="form__item">
          <label>
            Confirm Password:
            <input
              type="password"
              name="confirmPassword"
              value={formState.confirmPassword}
              onChange={handleChange}
            />
            <p className="error">{errors.confirmPassword}</p>
          </label>
        </div>
        <div className="form__item">
          <label>
            Gender:
            <select name="gender" value={formState.gender} onChange={handleChange}>
              <option value="">Select...</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <p className="error">{errors.gender}</p>
          </label>
        </div>
        <div className="form__item">
          <label>
            Country:
            <select name="country" value={formState.country} onChange={handleChange}>
              <option value="">Select...</option>
              <option value="us">USA</option>
              <option value="ca">Canada</option>
              <option value="uk">UK</option>
              <option value="au">Australia</option>
              <option value="ru">Russia</option>
            </select>
            <p className="error">{errors.country}</p>
          </label>
        </div>
        <div className="form__item">
          <label htmlFor="picture">Upload photo:</label>
          <div className="input__picture-block">
            <input
              className="input__picture"
              type="file"
              name="picture"
              onChange={handleFileChange}
            />
            <p className="error">{errors.picture}</p>
          </div>
        </div>
        <div className="form__checkbox">
          <label>
            <input
              className="input__checkbox"
              type="checkbox"
              name="terms"
              checked={formState.terms}
              onChange={handleChange}
            />
          </label>
          <div className="agreement__block">
            <p className="agreement__text"> I accept the Terms of Agreement</p>
            <p className="error">{errors.terms}</p>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
