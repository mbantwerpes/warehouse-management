import React from 'react';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button/Button';
import TechComponentCard from '../../components/TechComponentCard/TechComponentCard';
import Typography from '../../components/Typography/Typography';
import useShoppingCart from '../../hooks/useShoppingCart';
import useTechComponents from '../../hooks/useTechComponents';
import styles from './Cart.module.css';
import placeholderImage from '../../../assets/images/placeholder_image.jpeg';

const Cart = (): JSX.Element => {
  const history = useHistory();
  const handleBackButtonClick = () => {
    history.push('/');
  };

  const { cartItems } = useShoppingCart();
  const ids: string[] = cartItems.map((cartItem) => cartItem.techComponentId);

  // TODO check if ids contains a value, if not is has to be handled
  const { techComponents } = useTechComponents(undefined, ids);

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
              key={techComponent._id}
              id={techComponent._id}
              layout="horizontal"
              onCardClick={() => console.log('placeholder')}
              amount={techComponent.amount}
              description={techComponent.description}
              image={placeholderImage}
              title={techComponent.title}
              editable={true}
            />
          );
        })}
      </div>
      <Button
        type="primary"
        size="l"
        onClick={() => console.log('placeholder')}
      >
        Reservieren
      </Button>
    </div>
  );
};

export default Cart;
