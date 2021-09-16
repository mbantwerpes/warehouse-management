import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Typography from '../../components/Typography/Typography';
import styles from './UserEdit.module.css';
import Button from '../../components/Button/Button';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { UserForFrontend } from '../../../lib/types/types';
import UserForm from '../../components/UserForm/UserForm';
import { useParams } from 'react-router-dom';
import useUser from '../../hooks/useUser';

const UserEdit = (): JSX.Element => {
  const [nameValue, setNameValue] = useState<string>('');
  const [passwordValue, setPasswordValue] = useState<string>('');
  const [grpNameValue, setGrpNameValue] = useState<string>('');
  const [grpNrValue, setGrpNrValue] = useState<string>('');
  const [matrNumberValue, setMatrNumberValue] = useState<string>('');
  const [emailValue, setEmailValue] = useState<string>('');
  const [telephoneValue, setTelephoneValue] = useState<string>('');
  const [roleValue, setRoleValue] = useState<'admin' | 'student'>('student');

  const history = useHistory();

  const { id }: { id: string } = useParams();

  // Fetch user and set state values
  const { user } = useUser(id);
  useEffect(() => {
    setNameValue(user?.name || '');
    setPasswordValue(user?.password || '');
    setGrpNameValue(user?.grpName || '');
    setGrpNrValue(user?.grpNr?.toString() || '');
    setMatrNumberValue(user?.matrNumber || '');
    setEmailValue(user?.email || '');
    setTelephoneValue(user?.telephone || '');
    setRoleValue(user?.role || 'student');
  }, [user]);

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

    const response = await fetch(`/api/user/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(postData),
    });

    console.log(await response.json());

    history.push(`/user/${id}`);
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
        Nutzer bearbeiten.
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
        setNameValue={setNameValue}
        setPasswordValue={setPasswordValue}
        setRoleValue={setRoleValue}
        setTelephoneValue={setTelephoneValue}
        isEdit={true}
      />
    </div>
  );
};

export default UserEdit;
