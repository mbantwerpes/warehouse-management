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
};

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
};
