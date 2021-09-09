import React from 'react';
import Counter from './Counter';
import { Story } from '@storybook/react';
import { CounterProps } from './Counter';

export default {
  title: 'Component/Counter',
  component: Counter,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

const Template: Story<CounterProps> = (args) => <Counter {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 1,
  onAddClick: () => console.log('add'),
  onSubtractClick: () => console.log('subtract'),
};
