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
import axios from 'axios';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';

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

  const editUser = async (user: UserForFrontend) => {
    const { data } = await axios.put(`/api/user/${id}`, user);
    return data;
  };

  const editUserMutation = useMutation(editUser);

  const handleSubmit = async (user: UserForFrontend) => {
    editUserMutation.mutate(user);

    toast.info('Nutzer erfolgreich geändert', {
      theme: 'colored',
      position: toast.POSITION.BOTTOM_CENTER,
    });

    history.push(`/user/${id}`);
  };

  return (
    <div className={styles.container}>
      <div>
        <Button
          type="secondary"
          size="none"
          onClick={handleBackButtonClick}
          className={styles.backButton}
        >
          <MdKeyboardArrowLeft size={32} />
        </Button>
        <Typography type="header" size="xl" className={styles.headline}>
          Nutzer bearbeiten.
        </Typography>
      </div>
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
