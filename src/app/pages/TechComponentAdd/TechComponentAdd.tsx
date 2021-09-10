import React from 'react';
import { useHistory } from 'react-router';
// import Typography from '../../components/Typography/Typography';
import styles from './TechComponentAdd.module.css';
// import Input from '../../components/Input/Input';
import Navbar from '../../components/Navbar/Navbar';
import Button from '../../components/Button/Button';
import { MdKeyboardArrowLeft } from 'react-icons/md';

const TechComponentAdd = (): JSX.Element => {
  const history = useHistory();

  const handleBackButtonClick = () => {
    history.push('/');
  };

  return (
    <div className={styles.layout}>
      <div className={styles.container}></div>
      <Button type="secondary" size="l" onClick={handleBackButtonClick}>
        <MdKeyboardArrowLeft />
      </Button>
      <Navbar active="home" />
    </div>
  );
};

export default TechComponentAdd;
