import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Typography from '../../components/Typography/Typography';
import styles from './Dashboard.module.css';

const Dashboard = (): JSX.Element => {
  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <Typography type="header" size="xl">
          Profil
        </Typography>
      </div>
      <Navbar active="user" />
    </div>
  );
};

export default Dashboard;
