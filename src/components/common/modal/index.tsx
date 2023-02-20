import React, { PropsWithChildren } from 'react';
import { Backdrop, DialogBox } from './style';

interface ModalDefaultType {
  size?: string;
  onClickToggleModal: () => void;
}

function Modal({
  onClickToggleModal,
  size,
  children,
}: PropsWithChildren<ModalDefaultType>) {
  return (
    <>
      <DialogBox size={size}>{children}</DialogBox>
      <Backdrop
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();
          if (onClickToggleModal) {
            onClickToggleModal();
          }
        }}
      />
    </>
  );
}

export default Modal;
