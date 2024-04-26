import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAllusers();
  }, []);

  function fetchAllusers() {
    axios
      .get("https://66154429b8b8e32ffc7a6ab3.mockapi.io/crud")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }

  function handleDelete(id) {
    axios
      .delete(`https://66154429b8b8e32ffc7a6ab3.mockapi.io/crud/${id}`)
      .then(() => fetchAllusers())
      .catch((err) => console.log(err));
  }

  return (
    <div className="p-5">
      <table className="container col-md-8">
        <tr>
          <th> Sr No</th>
          <th>Name </th>
          <th>Date</th>
          <th>Action</th>
        </tr>
        {users.map((item, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.createdAt}</td>
              <td>
                <button
                  className="btn btn-primary mx-2"
                  onClick={() => navigate("add-user")}
                >
                  {" "}
                  Add User
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => navigate(`/edit-user/${item.id}`)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-warning mx-2"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Users;
