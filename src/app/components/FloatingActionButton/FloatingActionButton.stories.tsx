import React from 'react';
import FloatingActionButton from './FloatingActionButton';
import { Story } from '@storybook/react';
import type { FloatingActionButtonProps } from './FloatingActionButton';
import { MdShoppingCart, MdAdd } from 'react-icons/md';

export default {
  title: 'Component/FloatingActionButton',
  component: FloatingActionButton,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

const Template: Story<FloatingActionButtonProps> = (args) => (
  <FloatingActionButton {...args} />
);

const onClickMockup = () => console.log('test');

export const Add = Template.bind({});
Add.args = {
  icon: <MdAdd size={40} />,
  onClick: onClickMockup,
};

export const ShoppingCart = Template.bind({});
ShoppingCart.args = {
  icon: <MdShoppingCart size={40} />,
  onClick: onClickMockup,
};
