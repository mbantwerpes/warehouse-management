import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Textarea from '../Textarea/Textarea';
import Typography from '../Typography/Typography';
import styles from './UserForm.module.css';

export type UserFormProps = {
  isEdit?: boolean;
  nameValue: string;
  passwordValue: string;
  grpNameValue: string;
  grpNrValue: string;
  matrNumberValue: string;
  emailValue: string;
  telephoneValue: string;
  roleValue: 'admin' | 'student';
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  setNameValue: (title: string) => void;
  setPasswordValue: (title: string) => void;
  setGrpNameValue: (title: string) => void;
  setGrpNrValue: (title: string) => void;
  setMatrNumberValue: (title: string) => void;
  setEmailValue: (title: string) => void;
  setTelephoneValue: (title: string) => void;
  setRoleValue: (title: string) => void;
};

const UserForm = ({
  isEdit = false,
  nameValue,
  passwordValue,
  grpNameValue,
  grpNrValue,
  matrNumberValue,
  emailValue,
  telephoneValue,
  roleValue,
  onSubmit,
  setNameValue,
  setPasswordValue,
  setGrpNameValue,
  setGrpNrValue,
  setMatrNumberValue,
  setEmailValue,
  setTelephoneValue,
  setRoleValue,
}: UserFormProps): JSX.Element => {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.formContent}>
        <label className={styles.labelGroup}>
          <Typography type="header" size="s">
            Name
          </Typography>
          <Input
            value={nameValue}
            placeholder="Name"
            type="text"
            onChange={(e) => setNameValue(e.target.value)}
          />
        </label>
        <label className={styles.labelGroup}>
          <Typography type="header" size="s">
            Artikelnummer
          </Typography>
          <Input
            value={passwordValue}
            placeholder="Artikelnummer"
            type="text"
            onChange={(e) => setPasswordValue(e.target.value)}
          />
        </label>
        <label className={styles.labelGroup}>
          <Typography type="header" size="s">
            Ortsangabe
          </Typography>
          <Input
            value={grpNameValue}
            placeholder="Ortsangabe"
            type="text"
            onChange={(e) => setGrpNameValue(e.target.value)}
          />
        </label>
        <label className={styles.labelGroup}>
          <Typography type="header" size="s">
            Beschreibung
          </Typography>
          <Textarea
            value={grpNrValue}
            placeholder="Beschreibung..."
            onChange={(e) => setGrpNrValue(e.target.value)}
            className={styles.textarea}
          />
        </label>
        <label className={styles.labelGroup}>
          <Typography type="header" size="s">
            Anzahl
          </Typography>
          <Input
            value={matrNumberValue}
            placeholder="0"
            type="number"
            onChange={(e) => setMatrNumberValue(e.target.value)}
          />
        </label>
      </div>
      <Button type="primary" size="l" className={styles.submitButton}>
        {isEdit ? 'Änderungen speichern' : 'Nutzer anlegen'}
      </Button>
    </form>
  );
};

export default UserForm;
