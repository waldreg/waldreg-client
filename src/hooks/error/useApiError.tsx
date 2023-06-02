import { useCallback } from 'react';
import { AxiosError } from 'axios';

import useModal from '../common/useModal';

const useApiError = () => {
  const { openModal } = useModal();

  const handleError = useCallback((axiosError: AxiosError) => {
    const errorResponse = axiosError.response as any;
    const error = errorResponse.data;
    const status = errorResponse.status;

    switch (status) {
      case 400:
        openModal({ modalType: 'error', modalProps: error });
        break;
    }
  }, []);
  return { handleError } as const;
};

export default useApiError;
