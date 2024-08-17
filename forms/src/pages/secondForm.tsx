import { useCallback } from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import "./styles.css";
import { addForm } from "../store/formSlice";
import { FormState } from "../types/types";
import { formSchema } from "../validation/formSchema";

export const SecondForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormState>({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = useCallback(
    (data: FormState) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          const base64String = reader.result.toString();
          dispatch(addForm({ ...data, picture: base64String }));
          navigate("/");
        }
      };
      if (data.picture && data.picture[0]) reader.readAsDataURL(data.picture[0]);
      else {
        dispatch(addForm(data));
        navigate("/");
      }
    },
    [dispatch, navigate],
  );

  return (
    <main className="main">
      <h1>Second Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form__item">
          <label>
            Name:
            <input type="text" {...register("name")} />
            <p className="error">{errors.name?.message}</p>
          </label>
        </div>
        <div className="form__item">
          <label>
            Age:
            <input type="number" {...register("age")} />
            <p className="error">{errors.age?.message}</p>
          </label>
        </div>
        <div className="form__item">
          <label>
            Email:
            <input type="email" {...register("email")} />
            <p className="error">{errors.email?.message}</p>
          </label>
        </div>
        <div className="form__item">
          <label>
            Password:
            <input type="password" {...register("password")} />
            <p className="error">{errors.password?.message}</p>
          </label>
        </div>
        <div className="form__item">
          <label>
            Confirm Password:
            <input type="password" {...register("confirmPassword")} />
            <p className="error">{errors.confirmPassword?.message}</p>
          </label>
        </div>
        <div className="form__item">
          <label>
            Gender:
            <select {...register("gender")}>
              <option value="">Select...</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <p className="error">{errors.gender?.message}</p>
          </label>
        </div>
        <div className="form__item">
          <label>
            Country:
            <select {...register("country")}>
              <option value="">Select...</option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
              <option value="UK">UK</option>
              <option value="Australia">Australia</option>
              <option value="Russia">Russia</option>
            </select>
            <p className="error">{errors.country?.message}</p>
          </label>
        </div>
        <div className="form__item">
          <label htmlFor="picture">Upload photo:</label>
          <div className="input__picture-block">
            <input
              className="input__picture"
              type="file"
              accept="image/png, image/jpeg"
              {...register("picture")}
            />
            <p className="error">{errors.picture?.message}</p>
          </div>
        </div>
        <div>
          <label className="form__checkbox">
            <Controller
              name="terms"
              control={control}
              render={({ field }) => (
                <input
                  className="input__checkbox"
                  type="checkbox"
                  checked={field.value}
                  onChange={(e) => field.onChange(e.target.checked)}
                />
              )}
            />
            <div className="agreement__block">
              <p className="agreement__text">I accept the Terms of Agreement</p>
              <p className="error">{errors.terms?.message}</p>
            </div>
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};
