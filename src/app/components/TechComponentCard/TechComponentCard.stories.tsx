import React from 'react';
import TechComponentCard from './TechComponentCard';
import { Story } from '@storybook/react';
import type { TechComponentCardProps } from './TechComponentCard';
import placeholderImage from '../../../assets/images/placeholder_image.jpeg';

export default {
  title: 'Component/TechComponentCard',
  component: TechComponentCard,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
  argTypes: {
    layout: {
      options: ['horizontal', 'vertical'],
      control: { type: 'select' },
    },
  },
};

const Template: Story<TechComponentCardProps> = (args) => (
  <TechComponentCard {...args} />
);

export const Horizontal = Template.bind({});
Horizontal.args = {
  layout: 'horizontal',
  image: placeholderImage,
  title: 'Microcontroller A-30',
  description: 'Dieser Mikrokontroller kann dies und das...',
  amount: 10,
};

export const Vertical = Template.bind({});
Vertical.args = {
  layout: 'vertical',
  image: placeholderImage,
  title: 'Microcontroller A-30',
  description: 'Dieser Mikrokontroller kann dies und das...',
  amount: 10,
};
