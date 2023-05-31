import { Backdrop, DialogBox } from "./style";
import React, { PropsWithChildren } from "react";

import styled from "styled-components";
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
      <DialogBox
        size={size}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: [0.075, 0.75, 0.8, 1], duration: 0.4 }}
      >
        {children}
      </DialogBox>
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
