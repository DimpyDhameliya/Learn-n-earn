import axios from "axios";
import React, { useState } from "react";

function SignIn() {
  const [formData, setFormData] = useState({
    email: " ",
    password: " ",
  });

  function handleSubmit() {
    console.log("formData", formData);
    axios
      .post(
        " https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAMAyFgTn4pWmpUUujTBTtgSiUs2ZuquTk ",
        formData
      )
      .then((res) =>
        localStorage.setItem("auth", JSON.stringify(res.data))
      )
      .catch((err) => console.log(err));
  }

  return (
    <div className="container p-5 col-md-6">
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleFormControlInput2"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })}
        />
      </div>

      <button className="btn btn primary" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default SignIn;
