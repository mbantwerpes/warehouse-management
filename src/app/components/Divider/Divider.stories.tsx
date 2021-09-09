import React from 'react';
import Divider from './Divider';
import { Story } from '@storybook/react';

export default {
  title: 'Component/Divider',
  component: Divider,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

const Template: Story = () => <Divider />;

export const Default = Template.bind({});
Default.args = {};
