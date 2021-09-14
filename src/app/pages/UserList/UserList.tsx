import React, { useState } from 'react';
import FloatingActionButton from '../../components/FloatinActionButton/FloatingActionButton';
import Typography from '../../components/Typography/Typography';
import styles from './UserList.module.css';
import { MdSearch, MdAdd } from 'react-icons/md';
import Input from '../../components/Input/Input';
import Navbar from '../../components/Navbar/Navbar';
import { useHistory } from 'react-router-dom';

const UserList = (): JSX.Element => {
  const [searchValue, setSearchValue] = useState<string>('');

  const history = useHistory();

  const handleAddUser = () => {
    history.push('/user/add');
  };

  const handleCardClick = (id: string) => {
    history.push(`/user/${id}`);
  };

  //   const { users } = useUsers();

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
        <section className={styles.cardList}></section>
      </div>
      <Navbar active="user" />
    </div>
  );
};

export default UserList;
