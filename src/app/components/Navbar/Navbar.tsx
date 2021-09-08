import React from 'react';
import styles from './Navbar.module.css';
import { MdHome, MdFormatListBulleted, MdPerson } from 'react-icons/md';

export type NavbarProps = {
  active: 'home' | 'order' | 'user';
};

const Navbar = ({ active }: NavbarProps): JSX.Element => {
  const activeLink = {
    color: 'var(--color-main-bright)',
  };

  return (
    <div className={styles.container}>
      <MdHome size={40} {...(active === 'home' ? activeLink : '')} />
      <MdFormatListBulleted
        size={40}
        {...(active === 'order' ? activeLink : '')}
      />
      <MdPerson size={40} {...(active === 'user' ? activeLink : '')} />
    </div>
  );
};

export default Navbar;
