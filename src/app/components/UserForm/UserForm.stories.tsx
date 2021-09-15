import React from 'react';
import UserForm from './UserForm';
import { Story } from '@storybook/react';
import type { UserFormProps } from './UserForm';

export default {
  title: 'Component/UserForm',
  component: UserForm,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

const Template: Story<UserFormProps> = (args) => <UserForm {...args} />;

export const Add = Template.bind({});
Add.args = {
  nameValue: '',
  passwordValue: '',
  grpNameValue: '',
  grpNrValue: '',
  matrNumberValue: '',
  emailValue: '',
  telephoneValue: '',
  roleValue: 'student',
};
