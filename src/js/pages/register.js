import React from 'react';
import api from '../../utils/api';

import Inputgroup from '../components/inputgroup';
import Button from '../components/button';

const Register = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {
      firstname: 'kiwi',
      lastname: 'admin',
      email: 'kiwi@admin.com',
      password: 'iamadmin',
      role: 'admin'
    };

    const result = await api.post('/admin/register', body);

    console.log('register result', result);
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
