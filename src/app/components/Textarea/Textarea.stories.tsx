import React from 'react';
import Textarea from './Textarea';
import { Story } from '@storybook/react';
import type { TextareaProps } from './Textarea';

export default {
  title: 'Component/Textarea',
  component: Textarea,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

const Template: Story<TextareaProps> = (args) => <Textarea {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Beschreibung...',
};
