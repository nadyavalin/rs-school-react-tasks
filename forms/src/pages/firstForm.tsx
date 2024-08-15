import { useState } from "react";
import { useDispatch } from "react-redux";
import "./styles.css";

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
  const [form, setForm] = useState<FormState>({
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
    const { name, type } = event.target;

    let value: string | boolean;
    if (type === "checkbox") {
      value = (event.target as HTMLInputElement).checked;
    } else {
      value = event.target.value;
    }

    setForm({
      ...form,
      [name]: value,
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
            setForm({ ...form, picture: base64String });
          }
        };
        reader.readAsDataURL(file);
        setErrors((prevErrors) => ({ ...prevErrors, picture: "" }));
      }
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: ErrorState = {};
    if (!form.name) {
      newErrors.name = "Name is required";
    }
    if (!form.age) {
      newErrors.age = "Age is required";
    }
    if (!form.email) {
      newErrors.email = "Email is required";
    }
    if (!form.password) {
      newErrors.password = "Password is required";
    }
    if (!form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    if (!form.gender) {
      newErrors.gender = "Gender is required";
    }
    if (!form.country) {
      newErrors.country = "Country is required";
    }
    if (!form.picture) {
      newErrors.picture = "Picture is required";
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted", form);
    }
  };

  return (
    <>
      <h1>First Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form__item">
          <label>
            Name:
            <input type="text" name="name" value={form.name} onChange={handleChange} />
            <p className="error">{errors.name}</p>
          </label>
        </div>
        <div className="form__item">
          <label>
            Age:
            <input type="number" name="age" value={form.age} onChange={handleChange} />
            <p className="error">{errors.age}</p>
          </label>
        </div>
        <div className="form__item">
          <label>
            Email:
            <input type="email" name="email" value={form.email} onChange={handleChange} />
            <p className="error">{errors.email}</p>
          </label>
        </div>
        <div className="form__item">
          <label>
            Password:
            <input type="password" name="password" value={form.password} onChange={handleChange} />
            <p className="error">{errors.password}</p>
          </label>
        </div>
        <div className="form__item">
          <label>
            Confirm Password:
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
            />
            <p className="error">{errors.confirmPassword}</p>
          </label>
        </div>
        <div className="form__item">
          <label>
            Gender:
            <select name="gender" value={form.gender} onChange={handleChange}>
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
            <select name="country" value={form.country} onChange={handleChange}>
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
              checked={form.terms}
              onChange={handleChange}
            />
            <p className="error">{errors.terms}</p>
          </label>
          <div> I accept the Terms of Agreement</div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
