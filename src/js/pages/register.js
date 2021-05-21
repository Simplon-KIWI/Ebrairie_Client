import React from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../utils/api';

import Inputgroup from '../components/inputgroup';
import Button from '../components/button';

const Register = () => {
  let history = useHistory();

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (inputValue, inputName) => {
    if (inputName === 'firstname') setFirstname(inputValue);
    if (inputName === 'lastname') setLastname(inputValue);
    if (inputName === 'email') setEmail(inputValue);
    if (inputName === 'password') setPassword(inputValue);
  };

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

    try {
      const result = await api.post('/admin/register', body);
      console.log(result.status, 'STATUS');
      if (result.status === 200) {
        history.push('/login');
        console.log('200 OK');
      }
    } catch (error) {
      console.log('connection failed');
      console.error(error.message);
    }
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
