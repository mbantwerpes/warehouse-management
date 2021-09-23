import React, { useState } from 'react';
import { MdKeyboardArrowLeft, MdDelete } from 'react-icons/md';
import { useHistory, useParams } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Typography from '../../components/Typography/Typography';
import styles from './TechComponentDetail.module.css';
import useTechComponent from '../../hooks/useTechComponent';
import Counter from '../../components/Counter/Counter';
import useShoppingCart from '../../hooks/useShoppingCart';
import { TechComponentOrder } from '../../../lib/types/types';
import ConfirmActionModal from '../../components/ConfirmActionModal/ConfirmActionModal';
import { useUserContext } from '../../context/UserContext';
import axios from 'axios';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import Modal from '../../components/Modal/Modal';
import placeholderImage from '../../../assets/images/placeholder_image.jpeg';

const TechComponentDetail = (): JSX.Element => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const { role } = useUserContext();

  const history = useHistory();
  const handleBackButtonClick = () => {
    history.push('/');
  };
  const { id }: { id: string } = useParams();
  const { data: techComponent } = useTechComponent(id);

  // Student functions
  const [cartAmount, setCartAmount] = useState<number>(1);
  const onAddClick = () => {
    if (techComponent !== undefined) {
      if (cartAmount < techComponent.amount) setCartAmount(cartAmount + 1);
    }
  };
  const onSubtractClick = () => {
    if (cartAmount > 1) {
      setCartAmount(cartAmount - 1);
    }
  };

  const { addCartItem } = useShoppingCart();

  const handleAddToCart = () => {
    if (cartAmount > 0) {
      const cardItem: TechComponentOrder = {
        techComponentId: id,
        amount: cartAmount,
      };
      addCartItem(cardItem);

      toast.info('Erfolgreich hinzugefügt', {
        theme: 'colored',
        position: toast.POSITION.BOTTOM_CENTER,
      });

      history.push('/cart');
    }
  };

  // Admin functions
  const deleteTechComponent = async () => {
    const { data } = await axios.delete(`/api/techcomponent/${id}`);
    return data;
  };

  const deleteTechComponentMutation = useMutation(deleteTechComponent);

  const handleDeleteTechComponent = async () => {
    deleteTechComponentMutation.mutate();

    setModalIsOpen(false);

    toast.info('Bauteil erfolgreich gelöscht', {
      theme: 'colored',
      position: toast.POSITION.BOTTOM_CENTER,
    });

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
      <Typography type="header" size="xl">
        {techComponent?.title}
      </Typography>
      <div className={styles.content}>
        <img
          src={
            techComponent?.base64Image
              ? `data:image/png;base64, ${techComponent?.base64Image}`
              : placeholderImage
          }
          alt="placeholder"
          className={styles.img}
        />
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
            {techComponent?.description
              ? techComponent.description
              : 'Keine Beschreibung vorhanden'}
          </Typography>
        </div>
        <div>
          <Typography type="header" size="m">
            Ortsangabe
          </Typography>
          <Typography type="text" size="m">
            {techComponent?.location}
          </Typography>
        </div>
      </div>
      {/* Only show counter if user is not an admin */}
      {!(role === 'admin') && (
        <Counter
          value={cartAmount}
          onAddClick={onAddClick}
          onSubtractClick={onSubtractClick}
          className={styles.counter}
        />
      )}
      {/* Render buttons conditionally if user role is student or admin */}
      {role === 'admin' ? (
        <div className={styles.buttonGroup}>
          <Button type="error" size="l" onClick={() => setModalIsOpen(true)}>
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
      ) : (
        <Button type="primary" size="l" onClick={handleAddToCart}>
          Zum Warenkorb hinzufügen
        </Button>
      )}
      <Modal
        isOpen={modalIsOpen}
        hideModal={() => setModalIsOpen(false)}
        title="Bauteil löschen"
      >
        <ConfirmActionModal
          onClose={() => setModalIsOpen(false)}
          onConfirmAction={handleDeleteTechComponent}
          content="Bist du dir sicher, dass du das Bauteil löschen möchtest?"
          confirmButtonText="Löschen"
        />
      </Modal>
    </div>
  );
};

export default TechComponentDetail;
