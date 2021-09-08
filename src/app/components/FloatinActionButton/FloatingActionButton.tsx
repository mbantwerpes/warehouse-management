import React, { useCallback } from 'react';
import { ReactNode } from 'react';
import styles from './FloatingActionButton.module.css';
import { useHistory } from 'react-router-dom';

export type FloatingActionButtonProps = {
  icon: ReactNode;
  redirectTo?: string;
  onClick?: () => void;
};

const FloatingActionButton = ({
  icon,
  redirectTo,
  onClick,
}: FloatingActionButtonProps): JSX.Element => {
  const history = useHistory();
  const handleRedirect = useCallback(
    () => history.push(`/${redirectTo}`),
    [history]
  );

  return (
    <button
      className={styles.button}
      onClick={redirectTo === undefined ? onClick : handleRedirect}
    >
      {icon}
    </button>
  );
};

export default FloatingActionButton;
