import styled from 'styled-components';

import { useState } from 'react';
import useAllUserList from '../../../hooks/user/useAllUserList';

import { User } from '../../../interfaces/user';

import { Top } from '../../../components/character/CharacterList/style';
import { Title } from '../../../components/common/pagetitle/style';
import { IconWrapper } from '../../../components/character/CharacterList/style';
import { PlusIcon } from '../../../components/Icons/SettingIcons';

import COLOR from '../../../constants/color';
import FONT from '../../../constants/fonts';

import UserCreateRewardModal from '../UserCreateRewardModal';
import { UserRewards } from '../../user/UserRewards';
import RewardReset from '../RewardReset';

const RewardUserList = ({ setUser }: { setUser: any }) => {
  const userList = useAllUserList(1, 50)?.users;

  const [isOpenCreateModal, setIsOpenCreateModal] = useState(false);

  const handleClickCreateModal = () => {
    setIsOpenCreateModal(!isOpenCreateModal);
  };

  return (
    <Container>
      <Top>
        <Title style={FONT.HEADING}>상벌점 관리</Title>
        <Btns>
          <RewardReset />
          <IconWrapper onClick={handleClickCreateModal}>
            <PlusIcon />
          </IconWrapper>
        </Btns>
      </Top>
      {isOpenCreateModal && (
        <UserCreateRewardModal setIsOpenCreateModal={setIsOpenCreateModal} />
      )}
      <UserItems>
        {userList?.length === 0 || userList === undefined ? (
          <></>
        ) : (
          userList.map((user: User) => (
            <UserItem
              key={user.id}
              onClick={() => setUser(user.id)}
              positive={user.reward_point >= 0}
            >
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

const UserItem = styled.div<{ positive: boolean }>`
  width: 100%;
  height: 100%;
  padding: 0 0.5rem;

  border-radius: 0.5rem;

  background: ${(props) => (props.positive ? COLOR.GREEN1 : COLOR.RED1)};
  color: ${(props) => (props.positive ? COLOR.GREEN4 : COLOR.RED2)};
  cursor: pointer;
`;

const Btns = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export default RewardUserList;
