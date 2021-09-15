import React from 'react';
import LoginForm from './LoginForm';
import { Story } from '@storybook/react';
import type { LoginFormProps } from './LoginForm';

export default {
  title: 'Component/LoginForm',
  component: LoginForm,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
  argTypes: {
    type: {
      options: ['text', 'password'],
      control: { type: 'select' },
    },
  },
};

const Template: Story<LoginFormProps> = (args) => <LoginForm {...args} />;

export const Default = Template.bind({});
Default.args = {};
