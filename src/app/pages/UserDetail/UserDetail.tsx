import React, { useState } from 'react';
import { MdKeyboardArrowLeft, MdDelete } from 'react-icons/md';
import { useHistory, useParams } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Typography from '../../components/Typography/Typography';
import styles from './UserDetail.module.css';
import ConfirmActionModal from '../../components/ConfirmActionModal/ConfirmActionModal';
import useUser from '../../hooks/useUser';
import axios from 'axios';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import Modal from '../../components/Modal/Modal';
import UserProfile from '../../components/UserProfile/UserProfile';

const UserDetail = (): JSX.Element => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const history = useHistory();
  const handleBackButtonClick = () => {
    history.push('/user');
  };
  const { id }: { id: string } = useParams();

  const { data: user } = useUser(id);

  const deleteUser = async () => {
    const { data } = await axios.delete(`/api/user/${id}`);
    return data;
  };

  const deleteUserMutation = useMutation(deleteUser);

  const handleDeleteUser = async () => {
    deleteUserMutation.mutate();

    toast.info('Nutzer erfolgreich gelöscht', {
      theme: 'colored',
      position: toast.POSITION.BOTTOM_CENTER,
    });

    setModalIsOpen(false);

    history.push('/user');
  };

  return (
    <div className={styles.container}>
      <Button
        type="secondary"
        size="m"
        onClick={handleBackButtonClick}
        className={styles.backButton}
      >
        <MdKeyboardArrowLeft size={32} />
      </Button>
      <Typography type="header" size="xl">
        {user?.name}
      </Typography>

      <UserProfile user={user} />

      <div className={styles.buttonGroup}>
        <Button type="error" size="l" onClick={() => setModalIsOpen(true)}>
          <MdDelete size={24} />
        </Button>
        <Button
          type="primary"
          size="l"
          onClick={() => history.push(`/user/edit/${id}`)}
        >
          Bearbeiten
        </Button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        hideModal={() => setModalIsOpen(false)}
        title="Löschen"
      >
        <ConfirmActionModal
          onClose={() => setModalIsOpen(false)}
          onConfirmAction={handleDeleteUser}
          content="Bist du dir sicher, dass du den Nutzer löschen möchtest?"
          confirmButtonText="Löschen"
        />
      </Modal>
    </div>
  );
};

export default UserDetail;
