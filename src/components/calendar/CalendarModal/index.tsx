import { Backdrop, DialogBox, DialogButton, DialogButtonBox } from "./style";

type CalendarModalProps = {
  onClickToggleModal: () => void;
  children: React.ReactNode;
  handleSubmit?: (e: React.SyntheticEvent) => void;
  buttonName1: string;
  buttonName2: string;
};

function CalendarModal({
  onClickToggleModal,
  handleSubmit,
  children,
  buttonName1,
  buttonName2,
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
          <DialogButton onClick={handleCancelClick}>{buttonName1}</DialogButton>
          <DialogButton onClick={handleSubmit}>{buttonName2}</DialogButton>
        </DialogButtonBox>
      </DialogBox>
      <Backdrop onClick={handleCancelClick} />
    </>
  );
}

export default CalendarModal;
