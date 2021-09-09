import '../src/app/globals.css';
import React from 'react';
import { addDecorator } from '@storybook/react';
import { MemoryRouter } from 'react-router';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

let modalRoot = document.createElement('div');
modalRoot.setAttribute('id', 'modal-root');
document.querySelector('body')!.appendChild(modalRoot);

addDecorator((story) => <MemoryRouter>{story()}</MemoryRouter>);
