import styled from 'styled-components';

import { useState } from 'react';

import COLOR from '../../../constants/color';
import FONT from '../../../constants/fonts';

import ResetRewardModal from '../ResetRewardModal';

const RewardReset = () => {
  const [isOpenResetModal, setIsOpenResetModal] = useState(false);

  const handleClickResetModal = () => {
    setIsOpenResetModal(!isOpenResetModal);
  };

  return (
    <Text onClick={handleClickResetModal} style={FONT.SUBTITLE1}>
      상벌점 초기화
      {isOpenResetModal && (
        <ResetRewardModal setIsOpenResetModal={setIsOpenResetModal} />
      )}
    </Text>
  );
};

const Text = styled.button`
  color: ${COLOR.GREEN4};
  white-space: nowrap;
`;

export default RewardReset;
