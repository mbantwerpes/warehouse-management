import React from 'react';
import FloatingActionButton from '../../components/FloatinActionButton/FloatingActionButton';
import Typography from '../../components/Typography/Typography';
import styles from './TechComponentList.module.css';
import { MdShoppingCart, MdSearch } from 'react-icons/md';
import Input from '../../components/Input/Input';
import TechComponentCard from '../../components/TechComponentCard/TechComponentCard';
import placeholderImage from '../../../assets/images/placeholder_image.jpeg';
import Navbar from '../../components/Navbar/Navbar';

const TechComponentList = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Typography type="header" size="xl">
          Bauteile.
        </Typography>
        <FloatingActionButton icon={<MdShoppingCart size={24} />} />
      </div>
      <Input
        type="text"
        value=""
        onChange={() => console.log('test')}
        placeholder="Bauteil suchen..."
        icon={<MdSearch />}
        containerStyling={styles.inputContainer}
      />
      <div className={styles.cardList}>
        <TechComponentCard
          layout="vertical"
          title="Microcontroller A-30"
          description="Lorem ipsum dolor sit amet."
          amount={10}
          image={placeholderImage}
        />
        <TechComponentCard
          layout="vertical"
          title="Microcontroller A-30"
          description="Lorem ipsum dolor sit amet."
          amount={10}
          image={placeholderImage}
        />
        <TechComponentCard
          layout="vertical"
          title="Microcontroller A-30"
          description="Lorem ipsum dolor sit amet."
          amount={10}
          image={placeholderImage}
        />
        <TechComponentCard
          layout="vertical"
          title="Microcontroller A-30"
          description="Lorem ipsum dolor sit amet."
          amount={10}
          image={placeholderImage}
        />
        <TechComponentCard
          layout="vertical"
          title="Microcontroller A-30"
          description="Lorem ipsum dolor sit amet."
          amount={10}
          image={placeholderImage}
        />
      </div>
      <Navbar active="home" />
    </div>
  );
};

export default TechComponentList;
