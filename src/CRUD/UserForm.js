import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UserForm() {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axios
        .get(`https://66154429b8b8e32ffc7a6ab3.mockapi.io/crud/${id}`)
        .then((res) => setName(res.data.name))
        .catch((err) => console.log(err));
    }
  }, []);

  function handleSubmit() {
    if (id) {
      axios
        .put(`https://66154429b8b8e32ffc7a6ab3.mockapi.io/crud/${id}`, { name })
        .then((res) => navigate("/"))
        .catch((err) => console.log(err));
    } else {
      axios
        .post("https://66154429b8b8e32ffc7a6ab3.mockapi.io/crud/", { name })
        .then((res) => navigate("/")).catch((err)=> console.log(err));
    }
  }
  return (
    <div className="container col-md-6 p-5">
      <h2 className="pb-5 text-center">{id ? "Edit User" : "Add User"}</h2>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
        <button className="btn btn-primary mt-4" onClick={handleSubmit}>
          {id ? "Edit" : "Add"}
        </button>
      </div>
    </div>
  );
}

export default UserForm;
