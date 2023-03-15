import styled from 'styled-components';

import useCreateRewardTag from '../../../hooks/reward/useCreateRewardTag';
import { useInput } from '../../../hooks/common/useInput';

import Modal from '../../common/modal';
import { InputLine } from '../../common/inputs/input_line';
import { InputFillThin } from '../../../components/common/inputs/input_fill';
import { ButtonBig } from '../../common/buttons/button_big';
import COLOR from '../../../constants/color';

const RewardTagCreateModal = ({
  setIsOpenCreateModal,
}: {
  setIsOpenCreateModal: any;
}) => {
  const createMutation = useCreateRewardTag();

  const { value, handleChangeInput, reset } = useInput('');

  const handleClickSubmit = () => {
    createMutation.mutate({ reward_tag_title: value, reward_point: -2 });
    reset();
  };

  return (
    <Modal
      onClickToggleModal={() => setIsOpenCreateModal(false)}
      size={'small'}
    >
      <InputWrapper>
        <InputFillThin
          value={value}
          placeholder={'상벌점 이름'}
          onChange={handleChangeInput}
          reset={reset}
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
`;

const Buttons = styled.div`
  width: 100%;
  padding-top: 2rem;

  display: flex;
  gap: 2rem;
`;

export default RewardTagCreateModal;
