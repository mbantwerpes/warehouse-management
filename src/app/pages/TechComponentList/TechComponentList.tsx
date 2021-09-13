import React, { useState } from 'react';
import FloatingActionButton from '../../components/FloatinActionButton/FloatingActionButton';
import Typography from '../../components/Typography/Typography';
import styles from './TechComponentList.module.css';
import { MdShoppingCart, MdSearch, MdAdd } from 'react-icons/md';
import Input from '../../components/Input/Input';
import TechComponentCard from '../../components/TechComponentCard/TechComponentCard';
import placeholderImage from '../../../assets/images/placeholder_image.jpeg';
import Navbar from '../../components/Navbar/Navbar';
import { useHistory } from 'react-router-dom';
import useTechComponents from '../../hooks/useTechComponents';

export type TechComponentListProps = {
  isAdmin: boolean;
};

const TechComponentList = ({
  isAdmin = true,
}: TechComponentListProps): JSX.Element => {
  const [searchValue, setSearchValue] = useState<string>('');

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

  const { techComponents } = useTechComponents(searchValue);

  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <header className={styles.header}>
          <Typography type="header" size="xl">
            Bauteile.
          </Typography>
          {isAdmin ? (
            <FloatingActionButton
              onClick={handleAddTechComponentClick}
              icon={<MdAdd size={24} />}
            />
          ) : (
            <FloatingActionButton
              onClick={handleCartClick}
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
        </section>
      </div>
      <Navbar active="home" />
    </div>
  );
};

export default TechComponentList;
