import React from "react";

function Contact() {
  const userData = JSON.parse(localStorage.getItem("user"));
  return (
    <div>
      <h2>Email:{userData?.email}</h2>
      <h2>Password:{userData?.password}</h2>
    </div>
  );
}

export default Contact;
