import React, { useState } from 'react';
import FloatingActionButton from '../../components/FloatinActionButton/FloatingActionButton';
import Typography from '../../components/Typography/Typography';
import styles from './TechComponentList.module.css';
import { MdShoppingCart, MdSearch } from 'react-icons/md';
import Input from '../../components/Input/Input';
import TechComponentCard from '../../components/TechComponentCard/TechComponentCard';
import placeholderImage from '../../../assets/images/placeholder_image.jpeg';
import Navbar from '../../components/Navbar/Navbar';
import { useHistory } from 'react-router-dom';
import useTechComponents from '../../hooks/useTechComponents';

const TechComponentList = (): JSX.Element => {
  const [searchValue, setSearchValue] = useState<string>('');

  const history = useHistory();
  const handleCartButtonClick = () => {
    history.push('/cart');
  };

  const handleCardClick = (id: string) => {
    history.push(`/techcomponent/${id}`);
  };

  const { techComponents } = useTechComponents(searchValue);

  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Typography type="header" size="xl">
            Bauteile.
          </Typography>
          <FloatingActionButton
            onClick={handleCartButtonClick}
            icon={<MdShoppingCart size={24} />}
          />
        </div>
        <Input
          type="text"
          value={searchValue}
          onChange={setSearchValue}
          placeholder="Bauteil suchen..."
          icon={<MdSearch />}
          containerStyling={styles.inputContainer}
        />
        <div className={styles.cardList}>
          {techComponents?.map((techComponent) => {
            return (
              <TechComponentCard
                key={techComponent._id}
                id={techComponent._id}
                onCardClick={handleCardClick}
                layout="vertical"
                title={techComponent.title}
                description={techComponent.description}
                amount={techComponent.amount}
                image={placeholderImage}
              />
            );
          })}
        </div>
      </div>
      <Navbar active="home" />
    </div>
  );
};

export default TechComponentList;
