import React from 'react';
import styles from './Navbar.module.css';
import { MdHome, MdFormatListBulleted, MdPerson } from 'react-icons/md';

export type NavbarProps = {
  active: 'home' | 'order' | 'user';
};

const Navbar = ({ active }: NavbarProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <MdHome size={40} />
      <MdFormatListBulleted size={40} className={styles.active} />
      <MdPerson size={40} />
    </div>
  );
};

export default Navbar;
