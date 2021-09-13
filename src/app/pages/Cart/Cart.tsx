import React from 'react';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Typography from '../../components/Typography/Typography';
import useShoppingCart from '../../hooks/useShoppingCart';
import useTechComponents from '../../hooks/useTechComponents';
import styles from './Cart.module.css';

const Cart = (): JSX.Element => {
  const history = useHistory();
  const handleBackButtonClick = () => {
    history.push('/');
  };

  const { cartItems } = useShoppingCart();
  const ids: string[] = cartItems.map((cartItem) => cartItem.techComponentId);

  const { techComponents } = useTechComponents(undefined, ids);
  console.log(techComponents);

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
      <div className={styles.content}></div>
      <Button
        type="primary"
        size="l"
        onClick={() => console.log('placeholder')}
      >
        Zum Warenkorb hinzufügen
      </Button>
    </div>
  );
};

export default Cart;
