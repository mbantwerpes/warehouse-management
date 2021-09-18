import React from 'react';
import { useHistory } from 'react-router';
import Typography from '../../components/Typography/Typography';
import styles from './UserAdd.module.css';
import Button from '../../components/Button/Button';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { UserForFrontend } from '../../../lib/types/types';
import UserForm from '../../components/UserForm/UserForm';

const UserAdd = (): JSX.Element => {
  const history = useHistory();

  const handleBackButtonClick = () => {
    history.push('/user');
  };

  const handleSubmit = async (values: UserForFrontend) => {
    const response = await fetch('/api/user', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(values),
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
      <UserForm handleSubmit={handleSubmit} />
    </div>
  );
};

export default UserAdd;
