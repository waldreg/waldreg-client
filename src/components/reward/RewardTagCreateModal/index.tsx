import styled from 'styled-components';

import useCreateRewardTag from '../../../hooks/reward/useCreateRewardTag';
import { useInput } from '../../../hooks/common/useInput';

import Modal from '../../common/modal';
import { InputFillThin } from '../../../components/common/inputs/input_fill';
import { ButtonBig } from '../../common/buttons/button_big';
import COLOR from '../../../constants/color';

const RewardTagCreateModal = ({
  setIsOpenCreateModal,
}: {
  setIsOpenCreateModal: any;
}) => {
  const createMutation = useCreateRewardTag();

  const name = useInput('');
  const point = useInput('');

  const handleClickSubmit = () => {
    createMutation.mutate({
      reward_tag_title: name.value,
      reward_point: point.value,
    });
    name.reset();
    point.reset();
  };

  return (
    <Modal
      onClickToggleModal={() => setIsOpenCreateModal(false)}
      size={'small'}
    >
      <InputWrapper>
        <InputFillThin
          value={name.value}
          placeholder={'상벌점 이름'}
          onChange={name.handleChangeInput}
          reset={name.reset}
        />
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
          onClick={() => setIsOpenCreateModal(false)}
        />
        <ButtonBig
          content={'추가'}
          color={COLOR.GREEN4}
          onClick={() => {
            handleClickSubmit();
            setIsOpenCreateModal(false);
          }}
        />
      </Buttons>
    </Modal>
  );
};

const InputWrapper = styled.div`
  width: 100%;
  padding-bottom: 0.75rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Buttons = styled.div`
  width: 100%;
  padding-top: 2rem;

  display: flex;
  gap: 2rem;
`;

export default RewardTagCreateModal;
