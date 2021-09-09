import React from 'react';
import Modal from './Modal';
import { ModalProps } from './Modal';
import { Story } from '@storybook/react';
import Typography from '../Typography/Typography';

export default {
  title: 'Component/Modal',
  component: Modal,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

const Template: Story<ModalProps> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Title',
  children: (
    <Typography type="text" size="m">
      Lorem ipsum dolor sit amet.
    </Typography>
  ),
};
