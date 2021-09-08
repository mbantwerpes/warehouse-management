import React from 'react';
import Button from './Button';
import { Story } from '@storybook/react';
import type { ButtonProps } from './Button';

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

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button',
  type: 'primary',
  size: 'm',
};

export const Error = Template.bind({});
Error.args = {
  children: 'Button',
  type: 'error',
  size: 'l',
};
