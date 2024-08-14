import { useState } from "react";
import "./styles.css";

interface FormState {
  name: string;
}

interface ErrorState {
  name?: string;
}

export const FirstForm = () => {
  const [form] = useState<FormState>({
    name: "",
  });
  const [errors] = useState<ErrorState>({});

  return (
    <>
      <h1>First Form</h1>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" value={form.name} />
        {errors.name && <p>{errors.name}</p>}
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
