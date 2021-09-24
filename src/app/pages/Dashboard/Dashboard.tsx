import axios from 'axios';
import React from 'react';
import { useMutation } from 'react-query';
import { useHistory } from 'react-router';
import Button from '../../components/Button/Button';
import Navbar from '../../components/Navbar/Navbar';
import Typography from '../../components/Typography/Typography';
import styles from './Dashboard.module.css';

const Dashboard = (): JSX.Element => {
  const history = useHistory();

  const logout = async () => {
    const { data } = await axios.get('/api/auth/logout');
    return data;
  };

  const logoutMutation = useMutation(logout);

  const handleLogout = () => {
    logoutMutation.mutate();

    history.push('/login');
  };

  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <Typography type="header" size="xl">
          Dashboard
        </Typography>
        <Button type="primary" size="l" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <Navbar active="home" />
    </div>
  );
};

export default Dashboard;
