import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const Home = () => {
  const forms = useSelector((state: RootState) => state.form.forms);
  return (
    <>
      <main>
        <h1>Submitted forms</h1>
        <div className="sumbitted-forms">
          {forms.length > 0 ? (
            forms.map((formData, index) => (
              <div className="sumbitted-form" key={index}>
                <h2>Form Data {index + 1}</h2>
                <div className="sumbitted-form__text">
                  <span>Name:</span> {formData.name}
                </div>
                <div className="sumbitted-form__text">
                  <span>Age:</span> {formData.age}
                </div>
                <div className="sumbitted-form__text">
                  <span>Email:</span> {formData.email}
                </div>
                <div className="sumbitted-form__text">
                  <span>Password:</span> {formData.password}
                </div>
                <div className="sumbitted-form__text">
                  <span>Confirmed password:</span> {formData.password}
                </div>
                <div className="sumbitted-form__text">
                  <span>Gender:</span> {formData.gender}
                </div>
                <div className="sumbitted-form__text">
                  <span>Country:</span> {formData.country}
                </div>
                {formData.picture && (
                  <div className="submitted-form__preview sumbitted-form__text">
                    <span>Picture:</span>
                    <img
                      src={formData.picture}
                      alt="Uploaded"
                      style={{ maxWidth: "100%", maxHeight: "200px" }}
                    />
                  </div>
                )}
                <div className="sumbitted-form__text">
                  <span>Terms:</span> {formData.terms ? "Accepted" : "Not accepted"}
                </div>
              </div>
            ))
          ) : (
            <p>No submitted forms</p>
          )}
        </div>
      </main>
      <footer></footer>
    </>
  );
};

export default Home;
