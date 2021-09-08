import React from 'react';
import Input from './Input';
import { Story } from '@storybook/react';
import type { InputProps } from './Input';
import { MdPerson, MdSearch, MdLock } from 'react-icons/md';

export default {
  title: 'Component/Input',
  component: Input,
  argTypes: {
    type: {
      options: ['text', 'password'],
      control: { type: 'select' },
    },
  },
};

const Template: Story<InputProps> = (args) => <Input {...args} />;

const onChangeMockupFunction = () => {
  console.log('Onchange triggered');
};

export const WithoutIcon = Template.bind({});
WithoutIcon.args = {
  value: '',
  onChange: onChangeMockupFunction,
  type: 'text',
  placeholder: 'Placeholder',
};

export const User = Template.bind({});
User.args = {
  value: '',
  onChange: onChangeMockupFunction,
  type: 'text',
  placeholder: 'Email',
  icon: <MdPerson />,
};

export const Search = Template.bind({});
Search.args = {
  value: '',
  onChange: onChangeMockupFunction,
  type: 'text',
  placeholder: 'Suchen...',
  icon: <MdSearch />,
};

export const Password = Template.bind({});
Password.args = {
  value: '',
  onChange: onChangeMockupFunction,
  type: 'password',
  placeholder: 'Passwort',
  icon: <MdLock />,
};
