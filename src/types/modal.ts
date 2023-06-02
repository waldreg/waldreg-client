import { atom } from 'recoil';
import { MODAL_TYPES } from '../components/common/globalModal';

export type ErrorModal = {
  modalType: typeof MODAL_TYPES.error;
  modalProps: any;
};

export type ModalType = ErrorModal;

export const modalState = atom<ModalType | null>({
  key: 'modalState',
  default: null,
});
