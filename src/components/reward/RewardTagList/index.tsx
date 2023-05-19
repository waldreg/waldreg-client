import { useEffect, useState } from 'react';
import useRewardTags from '../../../hooks/reward/useRewardTags';

import RewardTagCreateModal from '../../../components/reward/RewardTagCreateModal';
import RewardTagEditModal from '../RewardTagEditModal';
import RewardTagDeleteModal from '../RewardTagDeleteModal';

import { Top } from '../../../components/character/CharacterList/style';
import { Title } from '../../../components/common/pagetitle/style';
import { IconWrapper } from '../../../components/character/CharacterList/style';
import { PlusIcon } from '../../../components/Icons/SettingIcons';

import FONT from '../../../constants/fonts';
import { RoundDelIcon, RoundEditIcon } from '../../Icons/BasicIcons';
import { RewardWithId } from '../../../interfaces/reward';

import * as S from './style';

const RewardTagList = () => {
  const rewards = useRewardTags();

  const [curReward, setCurReward] = useState<RewardWithId>();
  const [isOpenCreateModal, setIsOpenCreateModal] = useState(false);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  const handleClickCreateModal = () => {
    setIsOpenCreateModal(!isOpenCreateModal);
  };

  const handleClickEditModal = () => {
    setIsOpenEditModal(!isOpenEditModal);
  };

  const handleClickDeleteModal = () => {
    setIsOpenDeleteModal(!isOpenDeleteModal);
  };

  return (
    <S.Container>
      <Top>
        <Title style={FONT.HEADING}>상벌점 태그</Title>
        <IconWrapper onClick={handleClickCreateModal}>
          <PlusIcon />
        </IconWrapper>
      </Top>
      {isOpenCreateModal && (
        <RewardTagCreateModal setIsOpenCreateModal={setIsOpenCreateModal} />
      )}
      {isOpenEditModal && (
        <RewardTagEditModal
          setIsOpenEditModal={setIsOpenEditModal}
          reward={curReward}
        />
      )}
      {isOpenDeleteModal && (
        <RewardTagDeleteModal
          setIsOpenDeleteModal={setIsOpenDeleteModal}
          reward={curReward}
        />
      )}
      <S.Tags>
        {rewards?.length ? (
          rewards?.map((reward) => (
            <S.Tag key={reward.reward_tag_id}>
              <S.Text style={FONT.SUBTITLE2}>
                <Title>{reward.reward_tag_title}</Title>
                <S.Point>{reward.reward_point}</S.Point>
              </S.Text>
              <IconWrapper
                onClick={() => {
                  handleClickEditModal();
                  setCurReward(reward);
                }}
              >
                <RoundEditIcon />
              </IconWrapper>
              <IconWrapper
                onClick={() => {
                  handleClickDeleteModal();
                  setCurReward(reward);
                }}
              >
                <RoundDelIcon />
              </IconWrapper>
            </S.Tag>
          ))
        ) : (
          <div style={FONT.SUBTITLE1}>상벌점 태그가 없어요</div>
        )}
      </S.Tags>
    </S.Container>
  );
};

export default RewardTagList;
