import styled from 'styled-components';

import { useState } from 'react';

import { Top } from '../../../components/character/CharacterList/style';
import { Title } from '../../../components/common/pagetitle/style';
import { IconWrapper } from '../../../components/character/CharacterList/style';
import { PlusIcon } from '../../../components/Icons/SettingIcons';

import COLOR from '../../../constants/color';
import FONT from '../../../constants/fonts';

import UserCreateRewardModal from '../UserCreateRewardModal';

const RewardUserList = () => {
  const [isOpenCreateModal, setIsOpenCreateModal] = useState(false);

  const handleClickCreateModal = () => {
    setIsOpenCreateModal(!isOpenCreateModal);
  };

  return (
    <Container>
      <Top>
        <Title style={FONT.HEADING}>상벌점 목록</Title>
        <IconWrapper onClick={handleClickCreateModal}>
          <PlusIcon />
        </IconWrapper>
      </Top>
      {isOpenCreateModal && (
        <UserCreateRewardModal setIsOpenCreateModal={setIsOpenCreateModal} />
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
  gap: 2rem;
`;

export default RewardUserList;
