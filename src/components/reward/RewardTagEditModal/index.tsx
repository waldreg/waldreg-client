import styled from 'styled-components';

import useEditRewardTag from '../../../hooks/reward/useEditRewardTag';
import { useInput } from '../../../hooks/common/useInput';

import Modal from '../../common/modal';
import { InputFillThin } from '../../../components/common/inputs/input_fill';
import { ButtonBig } from '../../common/buttons/button_big';
import COLOR from '../../../constants/color';
import { RewardWithId } from '../../../interfaces/reward';
import FONT from '../../../constants/fonts';

const RewardTagEditModal = ({
  setIsOpenEditModal,
  reward,
}: {
  setIsOpenEditModal: any;
  reward?: RewardWithId;
}) => {
  const editMutation = useEditRewardTag();

  const name = useInput(reward?.reward_tag_title);
  const point = useInput(reward?.reward_point);

  const handleClickEdit = () => {
    editMutation.mutate({
      id: reward?.reward_tag_id || 1,
      newReward: { reward_tag_title: name.value, reward_point: point.value },
    });
  };

  return (
    <Modal onClickToggleModal={() => setIsOpenEditModal(false)} size={'small'}>
      <InputWrapper>
        <Text style={FONT.SUBTITLE1}>상벌점 이름</Text>
        <InputFillThin
          value={name.value}
          placeholder={'상벌점 이름'}
          onChange={name.handleChangeInput}
          reset={name.reset}
        />
        <Text style={FONT.SUBTITLE1}>상벌점 점수</Text>
        <InputFillThin
          value={point.value}
          placeholder={'상벌점 점수'}
          onChange={point.handleChangeInput}
          reset={point.reset}
        />
      </InputWrapper>

      <Buttons>
        <ButtonBig
          content={'취소'}
          color={COLOR.GRAY2}
          onClick={() => setIsOpenEditModal(false)}
        />
        <ButtonBig
          content={'수정'}
          color={COLOR.GREEN4}
          onClick={() => {
            handleClickEdit();
            setIsOpenEditModal(false);
          }}
        />
      </Buttons>
    </Modal>
  );
};

const Text = styled.div``;

const InputWrapper = styled.div`
  width: 100%;
  padding-bottom: 0.75rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Buttons = styled.div`
  width: 100%;
  padding-top: 0.5rem;

  display: flex;
  gap: 2rem;
`;

export default RewardTagEditModal;
