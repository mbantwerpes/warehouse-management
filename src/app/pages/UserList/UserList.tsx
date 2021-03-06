import React, { useState } from 'react';
import FloatingActionButton from '../../components/FloatingActionButton/FloatingActionButton';
import Typography from '../../components/Typography/Typography';
import styles from './UserList.module.css';
import { MdSearch, MdAdd } from 'react-icons/md';
import Input from '../../components/Input/Input';
import Navbar from '../../components/Navbar/Navbar';
import { useHistory } from 'react-router-dom';
import useUsers from '../../hooks/useUsers';
import UserCard from '../../components/UserCard/UserCard';
import { PulseLoader } from 'react-spinners';

const UserList = (): JSX.Element => {
  const [searchValue, setSearchValue] = useState<string>('');

  const history = useHistory();

  const handleAddUser = () => {
    history.push('/user/add');
  };

  const handleCardClick = (id: string) => {
    history.push(`/user/${id}`);
  };

  const { status, data: users } = useUsers(searchValue);

  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <header className={styles.header}>
          <Typography type="header" size="xl">
            Nutzer.
          </Typography>
          <FloatingActionButton
            onClick={handleAddUser}
            icon={<MdAdd size={24} />}
          />
        </header>
        <Input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Nutzer suchen..."
          icon={<MdSearch />}
          containerStyling={styles.inputContainer}
        />
        <section className={styles.cardList}>
          {status === 'loading' ? (
            <PulseLoader loading={true} size={20} color={'#fff'} />
          ) : status === 'error' ? (
            <Typography type="header" size="s">
              Beim laden der Nutzer ist etwas schief gelaufen
            </Typography>
          ) : users?.length === 0 ? (
            <Typography type="header" size="s">
              Keine Nutzer vorhanden
            </Typography>
          ) : (
            users?.map((user) => {
              return (
                <UserCard
                  key={user._id as string}
                  id={user._id as string}
                  name={user.name}
                  email={user.email}
                  matrNr={user.matrNumber}
                  onClick={handleCardClick}
                />
              );
            })
          )}
        </section>
      </div>
      <Navbar active="user" />
    </div>
  );
};

export default UserList;
