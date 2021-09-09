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

const TechComponentList = (): JSX.Element => {
  const [searchValue, setSearchValue] = useState('');

  const history = useHistory();
  const handleCartButtonClick = () => {
    history.push('/cart');
  };

  const handleCardClick = (id: string) => {
    history.push(`/techcomponent/${id}`);
  };

  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Typography type="header" size="xl">
            Bauteile.
          </Typography>
          <FloatingActionButton
            onClick={handleCartButtonClick}
            icon={<MdShoppingCart size={16} />}
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
          <TechComponentCard
            id="placeholder"
            onCardClick={handleCardClick}
            layout="vertical"
            title="Microcontroller A-30"
            description="Lorem ipsum dolor sit amet."
            amount={10}
            image={placeholderImage}
          />
          <TechComponentCard
            id="placeholder"
            onCardClick={handleCardClick}
            layout="vertical"
            title="Microcontroller A-30"
            description="Lorem ipsum dolor sit amet."
            amount={10}
            image={placeholderImage}
          />
          <TechComponentCard
            id="placeholder"
            onCardClick={handleCardClick}
            layout="vertical"
            title="Microcontroller A-30"
            description="Lorem ipsum dolor sit amet."
            amount={10}
            image={placeholderImage}
          />
          <TechComponentCard
            id="placeholder"
            onCardClick={handleCardClick}
            layout="vertical"
            title="Microcontroller A-30"
            description="Lorem ipsum dolor sit amet."
            amount={10}
            image={placeholderImage}
          />
          <TechComponentCard
            id="placeholder"
            onCardClick={handleCardClick}
            layout="vertical"
            title="Microcontroller A-30"
            description="Lorem ipsum dolor sit amet."
            amount={10}
            image={placeholderImage}
          />
          <TechComponentCard
            id="placeholder"
            onCardClick={handleCardClick}
            layout="vertical"
            title="Microcontroller A-30"
            description="Lorem ipsum dolor sit amet."
            amount={10}
            image={placeholderImage}
          />
        </div>
      </div>
      <Navbar active="home" />
    </div>
  );
};

export default TechComponentList;
