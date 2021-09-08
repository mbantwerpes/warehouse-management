import React from 'react';
import Button from './Button';
import { Story } from '@storybook/react';
import type { ButtonProps } from './Button';
import { MdDelete, MdAdd, MdRemove } from 'react-icons/md';

export default {
  title: 'Component/Button',
  component: Button,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
  argTypes: {
    type: {
      options: ['primary', 'error'],
      control: { type: 'select' },
    },
    size: {
      options: ['m', 'l'],
      control: { type: 'select' },
    },
  },
};

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

const onClickMockup = () => console.log('test');

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button',
  type: 'primary',
  size: 'm',
  onClick: onClickMockup,
};

export const Error = Template.bind({});
Error.args = {
  children: 'Button',
  type: 'error',
  size: 'l',
  onClick: onClickMockup,
};

export const Add = Template.bind({});
Add.args = {
  children: <MdAdd size={24} />,
  type: 'primary',
  size: 'm',
  onClick: onClickMockup,
};

export const Minus = Template.bind({});
Minus.args = {
  children: <MdRemove size={24} />,
  type: 'primary',
  size: 'm',
  onClick: onClickMockup,
};

export const Delete = Template.bind({});
Delete.args = {
  children: <MdDelete size={24} />,
  type: 'error',
  size: 'l',
  onClick: onClickMockup,
};
