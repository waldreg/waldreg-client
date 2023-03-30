import { Backdrop, DialogBox, DialogButton, DialogButtonBox } from "./style";
import CalendarDatePicker from "../CalendarDatePicker";

type CalendarModalProps = {
  onClickToggleModal: () => void;
  children: React.ReactNode;
  handleSubmit: (e: React.SyntheticEvent) => void;
  // setStartDate: (startDate: string) => void;
  // setEndDate: (endDate: string) => void;
};

function CalendarModal({
  onClickToggleModal,
  handleSubmit,
  children,
}: // setStartDate,
// setEndDate,
CalendarModalProps) {
  const handleCancelClick = () => {
    if (onClickToggleModal) {
      onClickToggleModal();
    }
  };

  return (
    <>
      <DialogBox>
        <CalendarDatePicker
        // setStartDate={(startDate) => setStartDate(startDate)}
        // setEndDate={(endDate) => setEndDate(endDate)}
        />
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
