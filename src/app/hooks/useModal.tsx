import React, { useState } from 'react';

import Modal from '../components/Modal/Modal';

// Renders a modal to the modal root and handles the visibility state
// of this modal.
//
// NOTE: Each modal you want to render should use a separate hook!!! (Not a new useModal hook-file just a separate useModal hook in the component)
// Otherwise your modals will share their visibility state which might lead
// to overlapping and unclosable elements.

// TODO add return types
export const useModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  const show = () => setIsVisible(true);
  const hide = () => setIsVisible(false);

  const RenderModal = ({
    children,
    title,
  }: {
    children: React.ReactChild;
    title: string;
  }) => (
    <>
      {isVisible && (
        <Modal closeModal={hide} title={title}>
          {children}
        </Modal>
      )}
    </>
  );

  return {
    show,
    hide,
    RenderModal,
  };
};
