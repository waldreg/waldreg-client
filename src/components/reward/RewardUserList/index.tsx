import styled from 'styled-components';

import { useState } from 'react';
import useUserList from '../../../hooks/user/useUserList';
import useDeleteAllUserReward from '../../../hooks/reward/useDeleteAllUserReward';

import { User } from '../../../interfaces/user';

import { Top } from '../../../components/character/CharacterList/style';
import { Title } from '../../../components/common/pagetitle/style';
import { IconWrapper } from '../../../components/character/CharacterList/style';
import { PlusIcon } from '../../../components/Icons/SettingIcons';

import COLOR from '../../../constants/color';
import FONT from '../../../constants/fonts';

import UserCreateRewardModal from '../UserCreateRewardModal';
import { UserRewards } from '../../user/UserRewards';

const RewardUserList = ({ setUser }: { setUser: any }) => {
  const userList = useUserList(1, 50)?.users;
  const delRewardsMutation = useDeleteAllUserReward();

  const [isOpenCreateModal, setIsOpenCreateModal] = useState(false);

  const handleClickCreateModal = () => {
    setIsOpenCreateModal(!isOpenCreateModal);
  };

  return (
    <Container>
      <Top>
        <Title style={FONT.HEADING}>상벌점 관리</Title>
        <Text
          onClick={() => delRewardsMutation.mutate()}
          style={FONT.SUBTITLE1}
        >
          상벌점 초기화
          <IconWrapper onClick={handleClickCreateModal}>
            <PlusIcon />
          </IconWrapper>
        </Text>
      </Top>
      {isOpenCreateModal && (
        <UserCreateRewardModal setIsOpenCreateModal={setIsOpenCreateModal} />
      )}
      <UserItems>
        {userList?.length === 0 || userList === undefined ? (
          <></>
        ) : (
          userList.map((user: User) => (
            <UserItem key={user.id} onClick={() => setUser(user.id)}>
              <UserRewards user={user} size={'small'} />
            </UserItem>
          ))
        )}
      </UserItems>
    </Container>
  );
};

const Container = styled.div`
  width: 80%;
  height: 100%;
  background: ${COLOR.WHITE};

  border-radius: 1rem;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const UserItems = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  overflow: auto;
`;

const UserItem = styled.div`
  width: 100%;
  height: 100%;

  cursor: pointer;
`;

const Text = styled.button`
  display: flex;
  align-items: center;
  gap: 2rem;
  color: ${COLOR.GREEN4};
`;

export default RewardUserList;
