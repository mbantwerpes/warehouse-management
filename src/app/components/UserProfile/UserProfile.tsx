import React from 'react';
import { User } from '../../../lib/types/types';
import Typography from '../Typography/Typography';
import styles from './UserProfile.module.css';

export type UserProfileProps = {
  user: User | undefined;
};

const UserProfile = ({ user }: UserProfileProps): JSX.Element => {
  return (
    <div className={styles.content}>
      <div>
        <Typography type="header" size="m">
          Rolle
        </Typography>
        <Typography type="text" size="m">
          {user?.role}
        </Typography>
      </div>
      <div>
        <Typography type="header" size="m">
          Name
        </Typography>
        <Typography type="text" size="m">
          {user?.name}
        </Typography>
      </div>
      <div>
        <Typography type="header" size="m">
          Matrikelnummer
        </Typography>
        <Typography type="text" size="m">
          {user?.matrNumber}
        </Typography>
      </div>
      <div>
        <Typography type="header" size="m">
          Email
        </Typography>
        <Typography type="text" size="m">
          {user?.email}
        </Typography>
      </div>
      <div>
        <Typography type="header" size="m">
          Telefonnummer
        </Typography>
        <Typography type="text" size="m">
          {user?.telephone}
        </Typography>
      </div>
      <div>
        <Typography type="header" size="m">
          Gruppenname
        </Typography>
        <Typography type="text" size="m">
          {user?.grpName}
        </Typography>
      </div>
      <div>
        <Typography type="header" size="m">
          Gruppennummer
        </Typography>
        <Typography type="text" size="m">
          {user?.grpNr}
        </Typography>
      </div>
    </div>
  );
};

export default UserProfile;
