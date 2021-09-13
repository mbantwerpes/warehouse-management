import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Typography from '../../components/Typography/Typography';
import styles from './TechComponentAdd.module.css';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import Textarea from '../../components/Textarea/Textarea';
import { TechComponentForFrontend } from '../../../lib/types';

const TechComponentAdd = (): JSX.Element => {
  const [titleValue, setTitleValue] = useState<string>('');
  const [artNrValue, setArtNrValue] = useState<string>('');
  const [locationValue, setLocationValue] = useState<string>('');
  const [descriptionValue, setDescriptionValue] = useState<string>('');
  const [amountValue, setAmountValue] = useState<string>('');

  const history = useHistory();

  const handleBackButtonClick = () => {
    history.push('/');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const postData: TechComponentForFrontend = {
      title: titleValue,
      description: descriptionValue,
      location: locationValue,
      amount: Number(amountValue),
      artNr: artNrValue,
    };

    const response = await fetch('/api/techcomponent/', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(postData),
    });

    console.log(await response.json());

    history.push('/');
  };

  return (
    <div className={styles.container}>
      <Button
        type="secondary"
        size="none"
        onClick={handleBackButtonClick}
        className={styles.backButton}
      >
        <MdKeyboardArrowLeft size={32} />
      </Button>
      <Typography type="header" size="xl">
        Bauteil anlegen.
      </Typography>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formContent}>
          <label className={styles.labelGroup}>
            <Typography type="header" size="s">
              Name
            </Typography>
            <Input
              value={titleValue}
              placeholder="Name"
              type="text"
              onChange={(e) => setTitleValue(e.target.value)}
            />
          </label>
          <label className={styles.labelGroup}>
            <Typography type="header" size="s">
              Artikelnummer
            </Typography>
            <Input
              value={artNrValue}
              placeholder="Artikelnummer"
              type="text"
              onChange={(e) => setArtNrValue(e.target.value)}
            />
          </label>
          <label className={styles.labelGroup}>
            <Typography type="header" size="s">
              Ortsangabe
            </Typography>
            <Input
              value={locationValue}
              placeholder="Ortsangabe"
              type="text"
              onChange={(e) => setLocationValue(e.target.value)}
            />
          </label>
          <label className={styles.labelGroup}>
            <Typography type="header" size="s">
              Beschreibung
            </Typography>
            <Textarea
              value={descriptionValue}
              placeholder="Beschreibung..."
              onChange={(e) => setDescriptionValue(e.target.value)}
              className={styles.textarea}
            />
          </label>
          <label className={styles.labelGroup}>
            <Typography type="header" size="s">
              Anzahl
            </Typography>
            <Input
              value={amountValue}
              placeholder="0"
              type="number"
              onChange={(e) => setAmountValue(e.target.value)}
            />
          </label>
        </div>
        <Button type="primary" size="l" className={styles.submitButton}>
          Bauteil anlegen
        </Button>
      </form>
    </div>
  );
};

export default TechComponentAdd;
