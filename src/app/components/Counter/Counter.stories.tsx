import React from 'react';
import Counter from './Counter';
import { Story } from '@storybook/react';

export default {
  title: 'Component/Counter',
  component: Counter,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

const Template: Story = () => <Counter />;

export const Default = Template.bind({});
Default.args = {};
