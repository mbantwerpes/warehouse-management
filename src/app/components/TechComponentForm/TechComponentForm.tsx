import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Textarea from '../Textarea/Textarea';
import Typography from '../Typography/Typography';
import styles from './TechComponentForm.module.css';

export type TechComponentFormProps = {
  titleValue: string;
  artNrValue: string;
  locationValue: string;
  descriptionValue: string;
  amountValue: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  setTitleValue: (title: string) => void;
  setArtNrValue: (title: string) => void;
  setLocationValue: (title: string) => void;
  setDescriptionValue: (title: string) => void;
  setAmountValue: (title: string) => void;
};

const TechComponentForm = ({
  titleValue,
  artNrValue,
  locationValue,
  descriptionValue,
  amountValue,
  onSubmit,
  setTitleValue,
  setArtNrValue,
  setLocationValue,
  setDescriptionValue,
  setAmountValue,
}: TechComponentFormProps): JSX.Element => {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
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
  );
};

export default TechComponentForm;
