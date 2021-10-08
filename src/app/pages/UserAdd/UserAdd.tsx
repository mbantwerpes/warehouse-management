import React from 'react';
import { useHistory } from 'react-router';
import Typography from '../../components/Typography/Typography';
import styles from './UserAdd.module.css';
import Button from '../../components/Button/Button';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { UserForFrontend } from '../../../lib/types/types';
import UserForm from '../../components/UserForm/UserForm';
import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';

const UserAdd = (): JSX.Element => {
  const queryClient = useQueryClient();

  const history = useHistory();

  const handleBackButtonClick = () => {
    history.push('/user');
  };

  const addUser = async (user: UserForFrontend) => {
    const { data } = await axios.post('/api/user', user);
    return data;
  };

  const addUserMutation = useMutation(addUser, {
    onSuccess: () => queryClient.invalidateQueries('users'),
  });

  const handleSubmit = async (user: UserForFrontend) => {
    await addUserMutation.mutateAsync(user);

    toast.info('Nutzer erfolgreich angelegt', {
      theme: 'colored',
      position: toast.POSITION.BOTTOM_CENTER,
    });

    history.push('/user');
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
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
      </div>
      <UserForm handleSubmit={handleSubmit} />
    </div>
  );
};

export default UserAdd;
