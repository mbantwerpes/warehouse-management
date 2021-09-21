import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { MdHome, MdFormatListBulleted, MdPerson } from 'react-icons/md';
import { useUserContext } from '../../context/UserContext';

export type NavbarProps = {
  active: 'home' | 'order' | 'user';
};

const Navbar = ({ active }: NavbarProps): JSX.Element => {
  const user = useUserContext();

  const activeLink = {
    color: 'var(--color-main-bright)',
  };

  return (
    <nav className={styles.container}>
      <Link to="/">
        <MdHome size={40} {...(active === 'home' ? activeLink : '')} />
      </Link>
      <Link to="/order">
        <MdFormatListBulleted
          size={40}
          {...(active === 'order' ? activeLink : '')}
        />
      </Link>
      <Link to={user.role === 'admin' ? '/user' : '/userprofile'}>
        <MdPerson size={40} {...(active === 'user' ? activeLink : '')} />
      </Link>
    </nav>
  );
};

export default Navbar;
