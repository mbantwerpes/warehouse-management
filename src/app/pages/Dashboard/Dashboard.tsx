import React from 'react';
import Button from '../../components/Button/Button';
import Navbar from '../../components/Navbar/Navbar';
import Typography from '../../components/Typography/Typography';
import styles from './Dashboard.module.css';

const Dashboard = (): JSX.Element => {
  const handleLogout = () => {
    console.log('joho');
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
