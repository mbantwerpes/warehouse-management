import React from 'react';
import Input from './Input';
import { Story } from '@storybook/react';
import type { InputProps } from './Input';

export default {
  title: 'Component/Input',
  component: Input,
  argTypes: {},
};

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const InputType = Template.bind({});
InputType.args = {
  type: 'text',
};
