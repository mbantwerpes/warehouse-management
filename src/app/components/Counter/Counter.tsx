import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import styles from './Counter.module.css';
import { MdAdd, MdRemove } from 'react-icons/md';

export type CounterProps = {
  value: number;
  onAddClick: () => void;
  onSubtractClick: () => void;
  onChange: () => void;
};

const Counter = ({
  value,
  onAddClick,
  onSubtractClick,
  onChange,
}: CounterProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <Button type="primary" size="l" onClick={onSubtractClick}>
        <MdRemove />
      </Button>
      <Input
        onChange={onChange}
        value={value}
        placeholder="0"
        type="number"
        inputStyling={styles.input}
      />
      <Button type="primary" size="l" onClick={onAddClick}>
        <MdAdd />
      </Button>
    </div>
  );
};

export default Counter;
