import React from 'react';
import TechComponentForm from './TechComponentForm';
import { Story } from '@storybook/react';
import type { TechComponentFormProps } from './TechComponentForm';

export default {
  title: 'Component/TechComponentForm',
  component: TechComponentForm,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

const Template: Story<TechComponentFormProps> = (args) => (
  <TechComponentForm {...args} />
);

export const Add = Template.bind({});
Add.args = {
  titleValue: '',
  artNrValue: '',
  locationValue: '',
  descriptionValue: '',
  amountValue: '',
};
