import React, { useState } from 'react';
import api from '../../utils/api';

import Inputgroup from '../components/inputgroup';
import Button from '../components/button';
import { useHistory } from 'react-router-dom';

const Login = () => {
  let history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (inputValue, inputName) => {
    if (inputName === 'email') setEmail(inputValue);
    if (inputName === 'password') setPassword(inputValue);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {
      email,
      password,
    };

    try {
      const result = await api.post('/admin/authenticate', body);
      console.log(result.status, 'STATUS');
      if (result.status === 200) {
        history.push('/kiwi');
        console.log('200 OK');
      }
    } catch (error) {
      console.log('connection failed');
      console.error(error.message);
    }
  };

  return (
    <div>
      <h1>C'est la page Login !</h1>
      <form onSubmit={handleSubmit}>
        <Inputgroup type="email" name="email" value={handleChange} />
        <Inputgroup
          type="password"
          name="password"
          minlength="8"
          value={handleChange}
        />
        <Button name="Me connecter" />
      </form>
    </div>
  );
};

export default Login;
