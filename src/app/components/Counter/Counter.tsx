import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import styles from './Counter.module.css';

const Counter = (): JSX.Element => {
  const mockOnClick = () => console.log('juhu');
  return (
    <div className={styles.container}>
      <Button type="primary" size="l" onClick={mockOnClick}>
        Minus
      </Button>
      <Input value="1" onChange={mockOnClick} placeholder="0" type="number" />
      <Button type="primary" size="l" onClick={mockOnClick}>
        Plus
      </Button>
    </div>
  );
};

export default Counter;
