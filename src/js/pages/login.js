import React, { useState } from 'react';
import api from '../../utils/api';

import Inputgroup from '../components/inputgroup';
import Button from '../components/button';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Login = () => {
  let history = useHistory();
  let dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errors, setErrors] = useState(null);

  const handleChange = (inputValue, inputName) => {
    if (inputName === 'email') setEmail(inputValue);
    if (inputName === 'password') setPassword(inputValue);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(null);
    const body = {
      email,
      password,
    };

    try {
      const result = await api.post('/admin/authenticate', body);
      dispatch({ type: 'USER_SET', payload: result.data });
      history.push('/');
    } catch (error) {
      console.log('connection failed');
      setErrors(error.response?.data?.message);
      dispatch({ type: 'USER_RESET' });
      // history.push('/kiwi');
      console.error(error.message);
    }
  };

  return (
    <div>
      {errors && <p>{errors}</p>}
      <h1>C'est la page Login !</h1>
      <form onSubmit={handleSubmit}>
        <Inputgroup type="email" name="email" value={handleChange} />
        <Inputgroup
          type="password"
          name="password"
          minlength="1"
          value={handleChange}
        />
        <Button name="Me connecter" />
      </form>
    </div>
  );
};

export default Login;
