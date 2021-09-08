import React from 'react';
import { Link } from 'react-router-dom';
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
      <Link to="/">
        <MdHome size={40} {...(active === 'home' ? activeLink : '')} />
      </Link>
      <Link to="/order">
        <MdFormatListBulleted
          size={40}
          {...(active === 'order' ? activeLink : '')}
        />
      </Link>
      <Link to="/user">
        <MdPerson size={40} {...(active === 'user' ? activeLink : '')} />
      </Link>
    </div>
  );
};

export default Navbar;
