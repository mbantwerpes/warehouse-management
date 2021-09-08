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

export const InputUser = Template.bind({});
InputUser.args = {
  type: 'text',
  placeholder: 'Email',
  icon: <MdPerson />,
};

export const InputSearch = Template.bind({});
InputSearch.args = {
  type: 'text',
  placeholder: 'Suchen...',
  icon: <MdSearch />,
};

export const InputPassword = Template.bind({});
InputPassword.args = {
  type: 'password',
  placeholder: 'Passwort',
  icon: <MdLock />,
};
