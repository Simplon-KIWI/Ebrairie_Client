import React from 'react';
import Inputgroup from '../components/inputgroup';
import Button from '../components/button';

const Login = () => {
    // const handleChange = async (event) => {
        
    // }
    

  return (
    <div>
      <h1>C'est la page Login !</h1>
      <form>
        <Inputgroup type="email" name=" email"/>
        <Inputgroup type="password" name="password"  minlength="8"/>
         <Button name="M'inscrire"/>
      </form>
    </div>
  );
};

export default Login;
