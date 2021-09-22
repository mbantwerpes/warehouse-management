import React, { useState } from 'react';
import FloatingActionButton from '../../components/FloatingActionButton/FloatingActionButton';
import Typography from '../../components/Typography/Typography';
import styles from './TechComponentList.module.css';
import { MdShoppingCart, MdSearch, MdAdd } from 'react-icons/md';
import Input from '../../components/Input/Input';
import TechComponentCard from '../../components/TechComponentCard/TechComponentCard';
import placeholderImage from '../../../assets/images/placeholder_image.jpeg';
import Navbar from '../../components/Navbar/Navbar';
import { useHistory } from 'react-router-dom';
import { useUserContext } from '../../context/UserContext';
import useTechComponents from '../../hooks/useTechComponents';
import PulseLoader from 'react-spinners/PulseLoader';
import useShoppingCart from '../../hooks/useShoppingCart';

const TechComponentList = (): JSX.Element => {
  const { role } = useUserContext();

  const [searchValue, setSearchValue] = useState<string>('');

  const { cartItems } = useShoppingCart();

  const history = useHistory();
  const handleCartClick = () => {
    history.push('/cart');
  };

  const handleAddTechComponentClick = () => {
    history.push('/techcomponent/add');
  };

  const handleCardClick = (id: string) => {
    history.push(`/techcomponent/${id}`);
  };

  const { status, data: techComponents } = useTechComponents(searchValue);

  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <header className={styles.header}>
          <Typography type="header" size="xl">
            Bauteile.
          </Typography>
          {role === 'admin' ? (
            <FloatingActionButton
              onClick={handleAddTechComponentClick}
              icon={<MdAdd size={24} />}
            />
          ) : (
            <FloatingActionButton
              onClick={handleCartClick}
              cartCounter={cartItems.length}
              icon={<MdShoppingCart size={24} />}
            />
          )}
        </header>
        <Input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Bauteil suchen..."
          icon={<MdSearch />}
          containerStyling={styles.inputContainer}
        />
        <section className={styles.cardList}>
          {status === 'loading' ? (
            <PulseLoader loading={true} size={20} color={'#fff'} />
          ) : (
            techComponents?.map((techComponent) => {
              return (
                <TechComponentCard
                  key={techComponent._id as string}
                  id={techComponent._id as string}
                  onCardClick={handleCardClick}
                  layout="vertical"
                  title={techComponent.title}
                  description={techComponent.description}
                  amount={techComponent.amount}
                  image={
                    techComponent?.base64Image
                      ? `data:image/png;base64, ${techComponent?.base64Image}`
                      : placeholderImage
                  }
                />
              );
            })
          )}
        </section>
      </div>
      <Navbar active="home" />
    </div>
  );
};

export default TechComponentList;
