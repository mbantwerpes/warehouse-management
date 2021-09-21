import React from 'react';
import Typography from '../../components/Typography/Typography';
import styles from './StudentProfile.module.css';
import UserProfile from '../../components/UserProfile/UserProfile';
import { useUserContext } from '../../context/UserContext';
import useUser from '../../hooks/useUser';
import Navbar from '../../components/Navbar/Navbar';

const StudentProfile = (): JSX.Element => {
  const user = useUserContext();

  const { data: userData } = useUser(user.id);

  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <Typography type="header" size="xl">
          Profil
        </Typography>
        <UserProfile user={userData} />
      </div>
      <Navbar active="user" />
    </div>
  );
};

export default StudentProfile;
