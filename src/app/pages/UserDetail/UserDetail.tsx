import React from 'react';
import { MdKeyboardArrowLeft, MdDelete } from 'react-icons/md';
import { useHistory, useParams } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Typography from '../../components/Typography/Typography';
import styles from './UserDetail.module.css';
import { useModal } from '../../hooks/useModal';
import ConfirmActionModal from '../../components/ConfirmActionModal/ConfirmActionModal';
import useUser from '../../hooks/useUser';

const UserDetail = (): JSX.Element => {
  const history = useHistory();
  const handleBackButtonClick = () => {
    history.push('/user');
  };
  const { id }: { id: string } = useParams();

  const { user } = useUser(id);

  console.log(user);

  const { show, hide, RenderModal: RenderDeleteModal } = useModal();

  const handleDeleteUser = async () => {
    const response = await fetch(`/api/user/${id}`, {
      method: 'DELETE',
    });

    console.log(await response.json());

    hide();

    history.push('/');
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
      {/* <Typography type="header" size="xl">
        {user?.name}
      </Typography> */}
      <div className={styles.content}>
        {/* <img src={placeholderImage} alt="placeholder" className={styles.img} />
        <Typography type="header" size="m">
          Verfügbar: {techComponent?.amount}
        </Typography>
        <div>
          <Typography type="header" size="m">
            Artikelnummer
          </Typography>
          <Typography type="text" size="m">
            {techComponent?.artNr}
          </Typography>
        </div>
        <div>
          <Typography type="header" size="m">
            Beschreibung
          </Typography>
          <Typography type="text" size="m">
            {techComponent?.description}
          </Typography>
        </div>
        <div>
          <Typography type="header" size="m">
            Ortsangabe
          </Typography>
          <Typography type="text" size="m">
            {techComponent?.location}
          </Typography>
        </div> */}
      </div>

      <div className={styles.buttonGroup}>
        <Button type="error" size="l" onClick={show}>
          <MdDelete size={24} />
        </Button>
        <Button
          type="primary"
          size="l"
          onClick={() => history.push(`/techcomponent/edit/${id}`)}
        >
          Bearbeiten
        </Button>
      </div>
      <RenderDeleteModal title="Löschen">
        <ConfirmActionModal
          onClose={hide}
          onConfirmAction={handleDeleteUser}
          content="Bist du dir sicher, dass du das Bauteil löschen möchtest?"
          confirmButtonText="Löschen"
        />
      </RenderDeleteModal>
    </div>
  );
};

export default UserDetail;
