import styled from 'styled-components';

import { useState } from 'react';
import useRewardTags from '../../../hooks/reward/useRewardTags';
import useDeleteRewardTag from '../../../hooks/reward/useDeleteRewardTag';
import useEditRewardTag from '../../../hooks/reward/useEditRewardTag';

import RewardTagCreateModal from '../../../components/reward/RewardTagCreateModal';

import { Top } from '../../../components/character/CharacterList/style';
import { Title } from '../../../components/common/pagetitle/style';
import { IconWrapper } from '../../../components/character/CharacterList/style';
import { PlusIcon } from '../../../components/Icons/SettingIcons';

import COLOR from '../../../constants/color';
import FONT from '../../../constants/fonts';

const RewardTagList = () => {
  const rewards = useRewardTags();

  const deleteMutation = useDeleteRewardTag();
  const editMutation = useEditRewardTag();

  const handleClickDelete = (id: number) => {
    deleteMutation.mutate(id);
  };

  const handleClickEdit = (id: number) => {
    editMutation.mutate({
      id: id,
      newReward: { reward_tag_title: 'test', reward_point: 2 },
    });
  };

  const [isOpenCreateModal, setIsOpenCreateModal] = useState(false);

  const handleClickCreateModal = () => {
    setIsOpenCreateModal(!isOpenCreateModal);
  };

  return (
    <Container>
      <Top>
        <Title style={FONT.HEADING}>상벌점 태그</Title>
        <IconWrapper onClick={handleClickCreateModal}>
          <PlusIcon />
        </IconWrapper>
      </Top>
      {isOpenCreateModal && (
        <RewardTagCreateModal setIsOpenCreateModal={setIsOpenCreateModal} />
      )}
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

export default RewardTagList;
