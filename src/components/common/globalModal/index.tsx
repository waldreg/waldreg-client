import { useRecoilState } from 'recoil';
import { modalState } from '../../../types/modal';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import ErrorModal from '../errormodal';

export const MODAL_TYPES = {
  error: 'error',
} as const;

const ModalComponents: any = {
  [MODAL_TYPES.error]: ErrorModal,
};

const GlobalModal = () => {
  const [modal, setModal] = useRecoilState(modalState);
  const { modalType, modalProps } = modal || {};

  const renderComponent = () => {
    if (!modalType) {
      return null;
    }
    const ModalComponent = ModalComponents[modalType];

    return (
      <>
        <DialogBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: [0.075, 0.75, 0.8, 1], duration: 0.4 }}
        >
          <ModalComponent {...modalProps} />
        </DialogBox>

        <Backdrop onClick={() => setModal(null)} />
      </>
    );
  };
  return <>{renderComponent()}</>;
};

const DialogBox = styled(motion.dialog)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 2rem;

  padding: 2rem 5rem;
  margin-top: 10%;

  border: none;
  border-radius: 1rem;
  box-shadow: 0 0 3rem rgba(30, 30, 30, 0.185);
  box-sizing: border-box;
  background-color: white;
  z-index: 3;
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

export default GlobalModal;
