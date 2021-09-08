import React from 'react';
import Typography from './Typography';
import { Story } from '@storybook/react';
import type { TypographyProps } from './Typography';

export default {
  title: 'Component/Typography',
  component: Typography,
  argTypes: {
    size: {
      options: ['xs', 's', 'm', 'l', 'xl'],
      control: { type: 'select' },
    },
    type: {
      options: ['header', 'text'],
      control: { type: 'select' },
    },
  },
};

const Template: Story<TypographyProps> = (args) => <Typography {...args} />;

export const TextOHeader = Template.bind({});
TextOHeader.args = {
  size: 'xs',
  type: 'header',
  children: 'Sample Text',
};
