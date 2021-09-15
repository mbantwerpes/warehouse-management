import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Typography from '../../components/Typography/Typography';
import styles from './UserAdd.module.css';
import Button from '../../components/Button/Button';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { UserForFrontend } from '../../../lib/types';
import UserForm from '../../components/UserForm/UserForm';

const UserAdd = (): JSX.Element => {
  const [nameValue, setnNameValue] = useState<string>('');
  const [passwordValue, setPasswordValue] = useState<string>('');
  const [grpNameValue, setGrpNameValue] = useState<string>('');
  const [grpNrValue, setGrpNrValue] = useState<string>('');
  const [matrNumberValue, setMatrNumberValue] = useState<string>('');
  const [emailValue, setEmailValue] = useState<string>('');
  const [telephoneValue, setTelephoneValue] = useState<string>('');
  const [roleValue, setRoleValue] = useState<'admin' | 'student'>('student');

  const history = useHistory();

  const handleBackButtonClick = () => {
    history.push('/user');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const postData: UserForFrontend = {
      name: nameValue,
      password: passwordValue,
      grpName: grpNameValue,
      grpNr: Number(grpNrValue),
      matrNumber: matrNumberValue,
      email: emailValue,
      telephone: telephoneValue,
      role: roleValue,
    };

    const response = await fetch('/api/user', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(postData),
    });

    console.log(await response.json());

    history.push('/user');
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
        Nutzer anlegen.
      </Typography>
      <UserForm
        emailValue={emailValue}
        grpNameValue={grpNameValue}
        grpNrValue={grpNrValue}
        matrNumberValue={matrNumberValue}
        nameValue={nameValue}
        passwordValue={passwordValue}
        roleValue={roleValue}
        telephoneValue={telephoneValue}
        onSubmit={handleSubmit}
        setEmailValue={setEmailValue}
        setGrpNameValue={setGrpNameValue}
        setGrpNrValue={setGrpNrValue}
        setMatrNumberValue={setMatrNumberValue}
        setNameValue={setnNameValue}
        setPasswordValue={setPasswordValue}
        setRoleValue={setRoleValue}
        setTelephoneValue={setTelephoneValue}
      />
    </div>
  );
};

export default UserAdd;
