import React from 'react';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button/Button';
import TechComponentCard from '../../components/TechComponentCard/TechComponentCard';
import Typography from '../../components/Typography/Typography';
import useShoppingCart from '../../hooks/useShoppingCart';
import styles from './Cart.module.css';
import placeholderImage from '../../../assets/images/placeholder_image.jpeg';
import { useModal } from '../../hooks/useModal';
import ConfirmActionModal from '../../components/ConfirmActionModal/ConfirmActionModal';
import useTechComponents from '../../hooks/useTechComponents';
import axios from 'axios';
import { useMutation } from 'react-query';
import { TechComponentOrder } from '../../../lib/types/types';

const Cart = (): JSX.Element => {
  const history = useHistory();
  const handleBackButtonClick = () => {
    history.push('/');
  };

  const { cartItems, removeCartItem } = useShoppingCart();
  // TODO check if cartItems contains a value, if not is has to be handled
  const ids: string[] = cartItems.map((cartItem) => cartItem.techComponentId);

  const { data: techComponents } = useTechComponents(undefined, ids);

  const addOrder = async (cartItems: TechComponentOrder[]) => {
    const { data } = await axios.post('/api/order', cartItems);
    return data;
  };

  const addOrderMutation = useMutation(addOrder);

  const handleReserveClick = async () => {
    addOrderMutation.mutate(cartItems);

    hide();

    history.push('/order');
  };

  const { show, hide, RenderModal: RenderReserveModal } = useModal();

  return (
    <div className={styles.container}>
      <header>
        <Button
          type="secondary"
          size="m"
          onClick={handleBackButtonClick}
          className={styles.backButton}
        >
          <MdKeyboardArrowLeft size={32} />
        </Button>
        <Typography type="header" size="xl">
          Warenkorb
        </Typography>
      </header>
      <div className={styles.content}>
        {techComponents?.map((techComponent) => {
          const cartItem = cartItems.find(
            (cartItem) => cartItem.techComponentId === techComponent._id
          );
          if (cartItem) {
            techComponent.amount = cartItem.amount;
          }
          return (
            <TechComponentCard
              key={techComponent._id as string}
              id={techComponent._id as string}
              layout="horizontal"
              onCardClick={() => console.log('placeholder')}
              amount={techComponent.amount}
              description={techComponent.description}
              image={placeholderImage}
              title={techComponent.title}
              editable={true}
              clickable={false}
              onDeleteClick={(id) => removeCartItem(id)}
            />
          );
        })}
      </div>
      <Button type="primary" size="l" onClick={show}>
        Reservieren
      </Button>
      <RenderReserveModal title="Warenkorb reservieren">
        <ConfirmActionModal
          onClose={hide}
          onConfirmAction={handleReserveClick}
          content="Bist du dir sicher, dass du den Warenkorb
          reservieren möchtest? Diese Aktion kann
          nur von einem Admin rückgängig gemacht
          werden."
          confirmButtonText="Reservieren"
        />
      </RenderReserveModal>
    </div>
  );
};

export default Cart;
