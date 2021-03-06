import React from 'react';
import Navbar from './Navbar';
import { Story } from '@storybook/react';
import type { NavbarProps } from './Navbar';

export default {
  title: 'Component/Navbar',
  component: Navbar,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
  argTypes: {
    active: {
      options: ['home', 'order', 'user'],
      control: { type: 'select' },
    },
  },
};

const Template: Story<NavbarProps> = (args) => <Navbar {...args} />;

export const Home = Template.bind({});
Home.args = {
  active: 'home',
};

export const Order = Template.bind({});
Order.args = {
  active: 'order',
};

export const User = Template.bind({});
User.args = {
  active: 'user',
};
