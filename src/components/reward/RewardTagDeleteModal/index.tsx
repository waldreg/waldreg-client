import styled from 'styled-components';

import useDeleteRewardTag from '../../../hooks/reward/useDeleteRewardTag';
import Modal from '../../common/modal';
import { Title } from '../../common/pagetitle/style';
import { ButtonBig } from '../../common/buttons/button_big';

import { RewardWithId } from '../../../interfaces/reward';

import COLOR from '../../../constants/color';
import FONT from '../../../constants/fonts';

const RewardTagDeleteModal = ({
  setIsOpenDeleteModal,
  reward,
}: {
  setIsOpenDeleteModal: any;
  reward?: RewardWithId;
}) => {
  const deleteMutation = useDeleteRewardTag();
  const handleClickDelete = (id?: number) => {
    if (id === undefined) {
      setIsOpenDeleteModal(false);
    } else {
      deleteMutation.mutate(id);
    }
  };

  return (
    <Modal
      onClickToggleModal={() => setIsOpenDeleteModal(false)}
      size={'small'}
    >
      <Top>
        <Title style={FONT.SUBTITLE2}>
          정말로 {reward?.reward_tag_title} 태그를
          <br /> 삭제하시겠습니까?
        </Title>
      </Top>
      <Buttons>
        <ButtonBig
          content={'취소'}
          color={COLOR.GRAY2}
          onClick={() => setIsOpenDeleteModal(false)}
        />
        <ButtonBig
          content={'삭제'}
          color={COLOR.GREEN4}
          onClick={() => {
            handleClickDelete(reward?.reward_tag_id);
            setIsOpenDeleteModal(false);
          }}
        />
      </Buttons>
    </Modal>
  );
};

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
  padding-top: 2rem;

  display: flex;
  gap: 2rem;
`;

export default RewardTagDeleteModal;
