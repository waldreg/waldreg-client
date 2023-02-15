import styled from 'styled-components';

import { useInput } from '../../../hooks/common/useInput';
import useRewardTags from '../../../hooks/reward/useRewardTags';
import useCreateRewardTag from '../../../hooks/reward/useCreateRewardTag';
import useDeleteRewardTag from '../../../hooks/reward/useDeleteRewardTag';
import useEditRewardTag from '../../../hooks/reward/useEditRewardTag';

import { InputAdd } from '../../../components/common/inputs/input_add';

import COLOR from '../../../constants/color';
import { ButtonBig } from '../../../components/common/buttons/button_big';

const RewardSettingPage = () => {
  const rewards = useRewardTags();
  const createMutation = useCreateRewardTag();
  const deleteMutation = useDeleteRewardTag();
  const editMutation = useEditRewardTag();
  const { value, handleChangeInput, reset } = useInput('');

  const handleClickSubmit = () => {
    createMutation.mutate({ reward_tag_title: value, reward_point: -2 });
    reset();
  };

  const handleClickDelete = (id: number) => {
    deleteMutation.mutate(id);
  };

  const handleClickEdit = (id: number) => {
    editMutation.mutate({
      id: id,
      newReward: { reward_tag_title: 'test', reward_point: 2 },
    });
  };

  return (
    <Container>
      <InputContainer>
        <InputAdd
          value={value}
          placeholder={'상벌점 태그를 추가하세요'}
          onChange={handleChangeInput}
          reset={reset}
        />
        <ButtonBig
          content={'추가하기'}
          color={COLOR.GREEN4}
          onClick={handleClickSubmit}
        />
      </InputContainer>
      {rewards?.length ? (
        rewards?.map((reward) => (
          <div key={reward.reward_tag_id}>
            <div>
              {reward.reward_tag_title}
              {reward.reward_point}
            </div>
            <button onClick={() => handleClickDelete(reward.reward_tag_id)}>
              삭제하기
            </button>
            <button onClick={() => handleClickEdit(reward.reward_tag_id)}>
              수정하기
            </button>
          </div>
        ))
      ) : (
        <div>상벌점 태그가 없어요</div>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: ${COLOR.WHITE};

  border-radius: 1rem;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
`;

const InputContainer = styled.div`
  display: flex;
`;

export default RewardSettingPage;
