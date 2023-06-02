import { useRecoilState } from 'recoil';
import { modalState } from '../../types/modal';

const useModal = () => {
  const [modal, setModal] = useRecoilState(modalState);

  const openModal = ({ modalType, modalProps }: any) => {
    setModal({ modalType, modalProps });
  };

  const closeModal = () => {
    setModal(null);
  };

  return { openModal, closeModal };
};

export default useModal;
