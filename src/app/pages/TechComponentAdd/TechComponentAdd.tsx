import React from 'react';
// import Typography from '../../components/Typography/Typography';
import styles from './TechComponentAdd.module.css';
// import Input from '../../components/Input/Input';
import Navbar from '../../components/Navbar/Navbar';

const TechComponentAdd = (): JSX.Element => {
  return (
    <div className={styles.layout}>
      <div className={styles.container}></div>
      <Navbar active="home" />
    </div>
  );
};

export default TechComponentAdd;
