import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import styles from './Counter.module.css';
import { MdAdd, MdRemove } from 'react-icons/md';

const Counter = (): JSX.Element => {
  const mockOnClick = () => console.log('juhu');
  return (
    <div className={styles.container}>
      <Button type="primary" size="l" onClick={mockOnClick}>
        <MdRemove />
      </Button>
      <Input
        value="10"
        onChange={mockOnClick}
        placeholder="0"
        type="number"
        inputStyling={styles.input}
      />
      <Button type="primary" size="l" onClick={mockOnClick}>
        <MdAdd />
      </Button>
    </div>
  );
};

export default Counter;
