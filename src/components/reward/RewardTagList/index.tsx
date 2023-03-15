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
import { RoundDelIcon, RoundEditIcon } from '../../Icons/BasicIcons';

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
      <Tags>
        {rewards?.length ? (
          rewards?.map((reward) => (
            <Tag key={reward.reward_tag_id}>
              <Text style={FONT.SUBTITLE3}>
                <Title>{reward.reward_tag_title}</Title>
                <Point>{reward.reward_point}</Point>
              </Text>
              <IconWrapper
                onClick={() => handleClickEdit(reward.reward_tag_id)}
              >
                <RoundEditIcon />
              </IconWrapper>
              <IconWrapper
                onClick={() => handleClickDelete(reward.reward_tag_id)}
              >
                <RoundDelIcon />
              </IconWrapper>
            </Tag>
          ))
        ) : (
          <div style={FONT.SUBTITLE1}>상벌점 태그가 없어요</div>
        )}
      </Tags>
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
  gap: 2rem;
`;

const Tags = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Tag = styled.div`
  display: flex;
  gap: 1rem;
`;

const Text = styled.div`
  width: 100%;
  padding: 1.5rem;

  border-radius: 0.5rem;

  display: flex;
  justify-content: space-between;

  background: ${COLOR.GRAY1};
`;

const Point = styled.div``;

export default RewardTagList;
