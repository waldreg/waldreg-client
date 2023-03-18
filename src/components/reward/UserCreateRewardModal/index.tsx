import styled from 'styled-components';

import { useState } from 'react';

import useUserList from '../../../hooks/user/useUserList';
import useRewardTags from '../../../hooks/reward/useRewardTags';
import { useInput } from '../../../hooks/common/useInput';
import { useUserCheckBox } from '../../../hooks/common/useCheckBox';

import Modal from '../../common/modal';
import { InputFillThin } from '../../common/inputs/input_fill';
import { UserCheckBox } from '../../common/checkbox/checkbox';
import { ButtonBig } from '../../common/buttons/button_big';
import COLOR from '../../../constants/color';

import { Title } from '../../common/pagetitle/style';

import FONT from '../../../constants/fonts';
import { RewardWithId } from '../../../interfaces/reward';
import useCreateUserReward from '../../../hooks/reward/useCreateUserReward';
import useDeleteAllUserReward from '../../../hooks/reward/useDeleteAllUserReward';

import { waldregAxios } from '../../../apis/axios';

const UserCreateRewardModal = ({
  setIsOpenCreateModal,
}: {
  setIsOpenCreateModal: any;
}) => {
  const userList = useUserList(1, 50)?.users;
  const rewardTags = useRewardTags();
  const delRewardsMutation = useDeleteAllUserReward();

  const { value, handleChangeInput, reset } = useInput('');
  const { checkedList, updateCheckList, checkReset } = useUserCheckBox();

  const [selectTag, setSelectTag] = useState<RewardWithId>();

  const searchUserList =
    value === ''
      ? userList
      : userList?.filter((user) =>
          user.name.toLowerCase().includes(value.toLowerCase())
        );

  const handleClickSubmit = async (userId: number) => {
    await waldregAxios.get(
      `/reward-tag/users?id=${userId}&reward-tag-id=${selectTag?.reward_tag_id}`
    );
  };

  return (
    <Modal onClickToggleModal={() => setIsOpenCreateModal(false)} size={'big'}>
      <Top>
        <Title style={FONT.HEADING}>유저 목록</Title>
        <InputFillThin
          value={value}
          placeholder={'유저 이름'}
          onChange={handleChangeInput}
          reset={reset}
        />
      </Top>

      <Top>
        <div>
          {rewardTags?.map((tag) => (
            <div key={tag.reward_tag_id} onClick={() => setSelectTag(tag)}>
              {tag.reward_tag_title}
            </div>
          ))}
        </div>
        <button onClick={() => delRewardsMutation.mutate()}>
          상벌점 초기화
        </button>
      </Top>

      <UserItems>
        {searchUserList?.length === 0 || searchUserList === undefined ? (
          <div style={FONT.BODY1}>검색된 유저가 없습니다</div>
        ) : (
          <UserCheckBox
            data={searchUserList || []}
            updateCheckList={updateCheckList}
            type="grid"
          />
        )}
      </UserItems>

      <Description>
        <div style={FONT.SUBTITLE1}>
          {checkedList.length === 0 ? (
            <></>
          ) : checkedList.length === 1 ? (
            <div>
              {checkedList[0].name} 유저에게 {selectTag?.reward_tag_title}{' '}
              태그를 부여합니다
            </div>
          ) : (
            <div>
              {checkedList[0].name} 외 {checkedList.length - 1} 명의 유저에게{' '}
              {selectTag?.reward_tag_title} 태그를 부여합니다
            </div>
          )}
        </div>
      </Description>

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
            checkedList.map((user) => handleClickSubmit(user.id));
            setIsOpenCreateModal(false);
          }}
        />
      </Buttons>
    </Modal>
  );
};

const Top = styled.div`
  width: 100%;
  padding-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 5rem;
`;

const UserItems = styled.div`
  width: 100%;
  height: 100%;

  overflow: auto;
`;

const Description = styled.div`
  height: 2rem;
  bottom: 0;

  color: ${COLOR.GRAY3};
`;

const Buttons = styled.div`
  width: 100%;
  padding-top: 1rem;

  display: flex;
  gap: 2rem;
`;

export default UserCreateRewardModal;
