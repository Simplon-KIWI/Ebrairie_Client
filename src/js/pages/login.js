import React from 'react';
import api from '../../utils/api';

import Inputgroup from '../components/inputgroup';
import Button from '../components/button';

const Login = () => {
  // const handleChange = async (event) => {

  // }
  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {
      email: 'beta@admin.com',
      password: 'iamadmin',
    };

    const result = await api.post('/admin/authenticate', body);

    console.log('login result', result);
  };

  return (
    <div>
      <h1>C'est la page Login !</h1>
      <form onSubmit={handleSubmit}>
        <Inputgroup type="email" name=" email" />
        <Inputgroup type="password" name="password" minlength="8" />
        <Button name="M'inscrire" />
      </form>
    </div>
  );
};

export default Login;
