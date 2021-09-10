import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Typography from '../../components/Typography/Typography';
import styles from './TechComponentAdd.module.css';
import Input from '../../components/Input/Input';
import Navbar from '../../components/Navbar/Navbar';
import Button from '../../components/Button/Button';
import { MdKeyboardArrowLeft } from 'react-icons/md';

const TechComponentAdd = (): JSX.Element => {
  const [nameValue, setNameValue] = useState('');
  const [artNrValue, setArtNrValue] = useState('');
  const [locationValue, setLocationValue] = useState('');

  const history = useHistory();

  const handleBackButtonClick = () => {
    history.push('/');
  };

  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <Button type="secondary" size="l" onClick={handleBackButtonClick}>
          <MdKeyboardArrowLeft />
        </Button>
        <Typography type="header" size="xl">
          Bauteil anlegen.
        </Typography>
        <label>
          <Typography type="text" size="s">
            Name
          </Typography>
          <Input
            value={nameValue}
            placeholder="Name"
            type="text"
            onChange={(e) => setNameValue(e.target.value)}
          />
        </label>
        <label>
          <Typography type="text" size="s">
            Name
          </Typography>
          <Input
            value={artNrValue}
            placeholder="Artikelnummer"
            type="text"
            onChange={(e) => setArtNrValue(e.target.value)}
          />
        </label>
        <label>
          <Typography type="text" size="s">
            Name
          </Typography>
          <Input
            value={locationValue}
            placeholder="Ortsangabe"
            type="text"
            onChange={(e) => setLocationValue(e.target.value)}
          />
        </label>
      </div>
      <Navbar active="home" />
    </div>
  );
};

export default TechComponentAdd;