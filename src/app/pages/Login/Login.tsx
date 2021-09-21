import axios from 'axios';
import React from 'react';
import { useMutation } from 'react-query';
import { useHistory } from 'react-router-dom';
import LoginForm from '../../components/LoginForm/LoginForm';
import styles from './Login.module.css';
import Typography from '../../components/Typography/Typography';
import Logo from '../../components/Logo/Logo';
import { useUserContext } from '../../context/UserContext';

type LoginValues = {
  email: string;
  password: string;
};

const Login = (): JSX.Element => {
  const { setData } = useUserContext();

  const history = useHistory();

  const login = async (values: LoginValues) => {
    const { data } = await axios.post('/api/auth', values);
    return data;
  };

  const loginMutation = useMutation(login);

  const handleSubmit = async (values: LoginValues) => {
    const data = await loginMutation.mutateAsync(values);

    setData(data);

    history.push('/');
  };

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Logo width="50" />
        <Typography type="header" size="m">
          Lagerverwaltung
        </Typography>
      </div>
      <div>
        <LoginForm handleSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default Login;
