import React from "react";
import Inputgroup from "../components/inputgroup";
import Button from "../components/button";
import Api from "../utils/api";

const Register = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const body = {
      lastname: "Jelly",
      firstname: "Bean",
      email: "bean@hopeitworks.com",
      password: "sweet",
    };

    Api.post("http://localhost:3001/users", body);
  };

  return (
    <div>
      <h1>Register page !</h1>
      <form onSubmit={handleSubmit}>
        <Inputgroup type="text" name="firstname" />
        <Inputgroup type="text" name="lastname" />
        <Inputgroup type="email" name="email" />
        <Inputgroup type="password" name="password" minlength="8" />
        <Button name="M'inscrire" />
      </form>
    </div>
  );
};

export default Register;
