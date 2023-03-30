import { Backdrop, DialogBox, DialogButton, DialogButtonBox } from "./style";

type CalendarModalProps = {
  onClickToggleModal: () => void;
  children: React.ReactNode;
  handleSubmit: (e: React.SyntheticEvent) => void;
};

function CalendarModal({
  onClickToggleModal,
  handleSubmit,
  children,
}: CalendarModalProps) {
  const handleCancelClick = () => {
    if (onClickToggleModal) {
      onClickToggleModal();
    }
  };

  return (
    <>
      <DialogBox>
        {children}
        <DialogButtonBox>
          <DialogButton onClick={handleCancelClick}>취소</DialogButton>
          <DialogButton onClick={handleSubmit}>생성</DialogButton>
        </DialogButtonBox>
      </DialogBox>
      <Backdrop onClick={handleCancelClick} />
    </>
  );
}

export default CalendarModal;
