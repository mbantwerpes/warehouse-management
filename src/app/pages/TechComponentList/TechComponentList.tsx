import React from 'react';
import FloatingActionButton from '../../components/FloatinActionButton/FloatingActionButton';
import Typography from '../../components/Typography/Typography';
import styles from './TechComponentList.module.css';
import { MdShoppingCart } from 'react-icons/md';

const TechComponentList = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Typography type="header" size="xl">
          Bauteile.
        </Typography>
        <FloatingActionButton icon={<MdShoppingCart size={24} />} />
      </div>
    </div>
  );
};

export default TechComponentList;
