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
  description:
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  amount: 10,
};

export const HorizontalEditable = Template.bind({});
HorizontalEditable.args = {
  layout: 'horizontal',
  image: placeholderImage,
  title: 'Microcontroller A-30',
  description:
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  amount: 10,
  editable: true,
};

export const Vertical = Template.bind({});
Vertical.args = {
  layout: 'vertical',
  image: placeholderImage,
  title: 'Microcontroller A-30',
  description:
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  amount: 10,
};
