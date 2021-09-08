import React from 'react';
import Input from './Input';
import { Story } from '@storybook/react';
import type { InputProps } from './Input';
import { MdPerson, MdSearch, MdLock } from 'react-icons/md';

export default {
  title: 'Component/Input',
  component: Input,
  argTypes: {},
};

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const WithoutIcon = Template.bind({});
WithoutIcon.args = {
  type: 'text',
  placeholder: 'Placeholder',
};

export const User = Template.bind({});
User.args = {
  type: 'text',
  placeholder: 'Email',
  icon: <MdPerson />,
};

export const Search = Template.bind({});
Search.args = {
  type: 'text',
  placeholder: 'Suchen...',
  icon: <MdSearch />,
};

export const Password = Template.bind({});
Password.args = {
  type: 'password',
  placeholder: 'Passwort',
  icon: <MdLock />,
};
