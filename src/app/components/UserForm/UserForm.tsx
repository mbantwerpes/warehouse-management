import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
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
            Passwort
          </Typography>
          <Input
            value={passwordValue}
            placeholder="Password"
            type="password"
            onChange={(e) => setPasswordValue(e.target.value)}
          />
        </label>
        <label className={styles.labelGroup}>
          <Typography type="header" size="s">
            Gruppenname
          </Typography>
          <Input
            value={grpNameValue}
            placeholder="Gruppenname"
            type="text"
            onChange={(e) => setGrpNameValue(e.target.value)}
          />
        </label>
        <label className={styles.labelGroup}>
          <Typography type="header" size="s">
            Grp
          </Typography>
          <Input
            value={grpNrValue}
            placeholder="0"
            type="number"
            onChange={(e) => setGrpNrValue(e.target.value)}
          />
        </label>
        <label className={styles.labelGroup}>
          <Typography type="header" size="s">
            Matrikelnummer
          </Typography>
          <Input
            value={matrNumberValue}
            placeholder="Matrikelnummer"
            type="text"
            onChange={(e) => setMatrNumberValue(e.target.value)}
          />
        </label>
        <label className={styles.labelGroup}>
          <Typography type="header" size="s">
            Email
          </Typography>
          <Input
            value={emailValue}
            placeholder="Email"
            type="email"
            onChange={(e) => setEmailValue(e.target.value)}
          />
        </label>
        <label className={styles.labelGroup}>
          <Typography type="header" size="s">
            Telefonnummer
          </Typography>
          <Input
            value={telephoneValue}
            placeholder="Telefonnummer"
            type="text"
            onChange={(e) => setTelephoneValue(e.target.value)}
          />
        </label>
        <label className={styles.labelGroup}>
          <Typography type="header" size="s">
            Rolle
          </Typography>
          <Input
            value={roleValue}
            placeholder="Rolle"
            type="text"
            onChange={(e) => setRoleValue(e.target.value)}
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
