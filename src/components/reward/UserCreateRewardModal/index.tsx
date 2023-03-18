import styled from 'styled-components';
import 'tw-elements';

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

import { waldregAxios } from '../../../apis/axios';

const UserCreateRewardModal = ({
  setIsOpenCreateModal,
}: {
  setIsOpenCreateModal: any;
}) => {
  const userList = useUserList(1, 50)?.users;
  const rewardTags = useRewardTags();

  const { value, handleChangeInput, reset } = useInput('');
  const { checkedList, updateCheckList, checkReset } = useUserCheckBox();

  const [selectTag, setSelectTag] = useState(rewardTags && rewardTags[0]);

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
      <Content>
        <Top>
          <Title style={FONT.HEADING}>유저 목록</Title>
          <InputFillThin
            value={value}
            placeholder={'유저 이름'}
            onChange={handleChangeInput}
            reset={reset}
          />
        </Top>

        <DropDown>
          <RewardBtn
            style={FONT.SUBTITLE1}
            data-bs-toggle="collapse"
            data-bs-target="#Menu"
            aria-controls="Menu"
          >
            {selectTag
              ? selectTag.reward_tag_title
              : '상벌점 태그를 선택하세요'}
          </RewardBtn>

          <RewardItems className="accordion-collapse collapse" id="Menu">
            {rewardTags?.map((tag) => (
              <RewardItem
                style={FONT.SUBTITLE1}
                key={tag.reward_tag_id}
                onClick={() => setSelectTag(tag)}
                data-bs-toggle="collapse"
                data-bs-target="#Menu"
                className="overflow-hidden text-ellipsis whitespace-nowrap transition duration-300 ease-in-out"
                id={`menu-item-${tag.reward_tag_id}`}
              >
                {tag.reward_tag_title}
              </RewardItem>
            ))}
          </RewardItems>
        </DropDown>
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
      </Content>

      <Bottom>
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
      </Bottom>
    </Modal>
  );
};

const Top = styled.div`
  width: 100%;
  padding-bottom: 6rem;
  display: flex;
  align-items: center;
  gap: 5rem;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const DropDown = styled.div`
  position: absolute;
  top: 6.5rem;

  width: 10rem;
  padding-bottom: 1rem;

  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 1rem;
`;

const RewardBtn = styled.button`
  width: 100%;
  padding: 0.8rem 2rem;

  text-align: left;

  border-radius: 0.5rem;
  background: ${COLOR.GRAY0};
`;

const RewardItems = styled.div`
  width: 100%;

  border-radius: 0.5rem;
  position: relative;
`;

const RewardItem = styled.div`
  padding: 0.8rem 2rem;
  background: ${COLOR.GRAY0};

  cursor: pointer;
`;

const UserItems = styled.div`
  width: 100%;

  overflow: auto;
`;

const Bottom = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
