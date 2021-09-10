import React from 'react';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Typography from '../../components/Typography/Typography';
import styles from './TechComponentDetails.module.css';

const TechComponentDetails = (): JSX.Element => {
  const history = useHistory();

  const handleBackButtonClick = () => {
    history.push('/');
  };

  return (
    <div className={styles.container}>
      <Button type="secondary" size="m" onClick={handleBackButtonClick}>
        <MdKeyboardArrowLeft size={32} />
      </Button>
      <Typography type="header" size="xl">
        Bauteil anlegen.
      </Typography>
    </div>
  );
};

export default TechComponentDetails;
