import styled from 'styled-components';
import 'tw-elements';

import useDeleteAllUserReward from '../../../hooks/reward/useDeleteAllUserReward';

import Modal from '../../common/modal';

import { Title } from '../../common/pagetitle/style';
import { ButtonBig } from '../../common/buttons/button_big';
import COLOR from '../../../constants/color';
import FONT from '../../../constants/fonts';

const ResetRewardModal = ({
  setIsOpenResetModal,
}: {
  setIsOpenResetModal: any;
}) => {
  const delRewardsMutation = useDeleteAllUserReward();

  const handleClickReset = () => {
    delRewardsMutation.mutate();
  };

  return (
    <Modal onClickToggleModal={() => setIsOpenResetModal(false)} size={'small'}>
      <Content>
        <Top>
          <Title style={FONT.SUBTITLE2}>
            정말로 모든 유저의 상벌점을
            <br /> 초기화 하시겠습니까?
          </Title>
        </Top>
        <Buttons>
          <ButtonBig
            content={'취소'}
            color={COLOR.GRAY2}
            onClick={() => setIsOpenResetModal(false)}
          />
          <ButtonBig
            content={'초기화'}
            color={COLOR.GREEN4}
            onClick={() => {
              handleClickReset();
              setIsOpenResetModal(false);
            }}
          />
        </Buttons>
      </Content>
    </Modal>
  );
};

const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

const Top = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
`;

const Buttons = styled.div`
  width: 100%;
  padding-top: 1rem;

  display: flex;
  gap: 2rem;
`;

export default ResetRewardModal;
