import React from 'react';
import Inputgroup from '../components/inputgroup';
import Button from '../components/button';

const Register = () => {
  return (
    <div>
      <h1>Register page !</h1>
      <form>
        <Inputgroup type="text" name="firstname"/>
        <Inputgroup type="text" name="lastname"/>
        <Inputgroup type="email" name="email"/>
        <Inputgroup type="password" name="password" minlength="8"/>
        <Button name="M'inscrire"/>
      </form>

    </div>
  );
};

export default Register;
