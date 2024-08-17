import { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import "./styles.css";
import { addForm } from "../store/formSlice";
import { ErrorState, FormState } from "../types/types";
import { formSchema } from "../validation/formSchema";
import {
  pictureSizeLimitMb,
  pictureSizeLimitBit,
  pictureSizeLimitBite,
} from "../constants/constants";

export const FirstForm = () => {
  const [formState, setFormState] = useState<FormState>({
    id: 1,
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

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errors, setErrors] = useState<ErrorState>({});

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value, type } = event.target;
    const isCheckbox = type === "checkbox";
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
      [name]: isCheckbox ? (event.target as HTMLInputElement).checked : value,
    });
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const maxSize = pictureSizeLimitMb * pictureSizeLimitBite * pictureSizeLimitBit;
      const allowedExtensions = ["image/png", "image/jpeg"];
      if (!allowedExtensions.includes(file.type) || file.size > maxSize) {
        setErrors({ ...errors, picture: "Invalid file type or size" });
      } else {
        const reader = new FileReader();
        reader.onloadend = () => {
          if (reader.result) {
            const base64String = reader.result.toString();
            dispatch({ type: "SET_PICTURE", payload: base64String });
            setFormState({ ...formState, picture: base64String });
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
      await formSchema.validate(formState, { abortEarly: false });
      dispatch(addForm(formState));
      navigate("/");
    } catch (validationErrors) {
      if (validationErrors instanceof Yup.ValidationError) {
        const formattedErrors: { [key: string]: string } = {};
        validationErrors.inner.forEach((error: Yup.ValidationError) => {
          if (error.path) {
            formattedErrors[error.path] = error.message;
          }
        });
        setErrors(formattedErrors);
      }
    }
  };

  return (
    <>
      <main className="main">
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
                <option value="USA">USA</option>
                <option value="Canad">Canada</option>
                <option value="UK">UK</option>
                <option value="Australia">Australia</option>
                <option value="Russia">Russia</option>
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
                accept="image/png, image/jpeg"
                onChange={handleFileChange}
              />
              <p className="error">{errors.picture}</p>
            </div>
          </div>
          <div>
            <label className="form__checkbox">
              <input
                className="input__checkbox"
                type="checkbox"
                name="terms"
                checked={formState.terms}
                onChange={handleChange}
              />
              <div className="agreement__block">
                <p className="agreement__text">I accept the Terms of Agreement</p>
                <p className="error">{errors.terms}</p>
              </div>
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </main>
    </>
  );
};
