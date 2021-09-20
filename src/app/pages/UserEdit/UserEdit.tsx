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
  const history = useHistory();

  const { id }: { id: string } = useParams();

  const [isLoading, setIsLoading] = useState(true);

  const [nameValue, setNameValue] = useState<string>('');
  const [grpNameValue, setGrpNameValue] = useState<string>('');
  const [grpNrValue, setGrpNrValue] = useState<number>();
  const [matrNumberValue, setMatrNumberValue] = useState<string>('');
  const [emailValue, setEmailValue] = useState<string>('');
  const [telephoneValue, setTelephoneValue] = useState<string>('');
  const [roleValue, setRoleValue] = useState<'admin' | 'student'>('student');

  // Fetch user and set state values
  const { data: user } = useUser(id);
  useEffect(() => {
    if (user !== null) setIsLoading(false);
    setNameValue(user?.name || '');
    setGrpNameValue(user?.grpName || '');
    setGrpNrValue(user?.grpNr || 0);
    setMatrNumberValue(user?.matrNumber || '');
    setEmailValue(user?.email || '');
    setTelephoneValue(user?.telephone || '');
    setRoleValue(user?.role || 'student');
  }, [user]);

  const handleBackButtonClick = () => {
    history.push(`/user/${id}`);
  };

  const handleSubmit = async (values: UserForFrontend) => {
    const response = await fetch(`/api/user/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(values),
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
      {!isLoading && (
        <UserForm
          handleSubmit={handleSubmit}
          isEdit={true}
          emailValue={emailValue}
          grpNameValue={grpNameValue}
          grpNrValue={grpNrValue}
          matrNumberValue={matrNumberValue}
          nameValue={nameValue}
          roleValue={roleValue}
          telephoneValue={telephoneValue}
        />
      )}
    </div>
  );
};

export default UserEdit;
