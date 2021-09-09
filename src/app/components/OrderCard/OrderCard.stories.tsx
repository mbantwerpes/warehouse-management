import React from 'react';
import OrderCard from './OrderCard';
import { Story } from '@storybook/react';
import type { OrderCardProps } from './OrderCard';

export default {
  title: 'Component/OrderCard',
  component: OrderCard,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

const Template: Story<OrderCardProps> = (args) => <OrderCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: '347hv79LA',
  reservedAt: '02.08.2021',
  returnAt: '01.09.2021',
  status: 'Offen',
};
