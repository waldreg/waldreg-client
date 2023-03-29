import React from "react";
import { Backdrop, DialogBox } from "./style";

type CalendarModalProps = {
  onClickToggleModal: () => void;
  children: React.ReactNode;
};

function CalendarModal({ onClickToggleModal, children }: CalendarModalProps) {
  return (
    <>
      <DialogBox>{children}</DialogBox>
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

export default CalendarModal;
