import React from 'react';
import UserCard from './UserCard';
import { Story } from '@storybook/react';
import type { UserCardProps } from './UserCard';

export default {
  title: 'Component/UserCard',
  component: UserCard,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

const Template: Story<UserCardProps> = (args) => <UserCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Max Mustermann',
  matrNr: '2134567i89',
  email: 'max@mustermann.de',
};
