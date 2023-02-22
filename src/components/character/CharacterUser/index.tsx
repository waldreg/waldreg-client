import { useState } from 'react';
import styled from 'styled-components';

import useUserList from '../../../hooks/user/useUserList';
import { useInput } from '../../../hooks/common/useInput';
import { useUserCheckBox } from '../../../hooks/common/useCheckBox';

import { PlusIcon } from '../../Icons/SettingIcons';
import { InputFillBold } from '../../common/inputs/input_fill';
import { UserCheckBox } from '../../common/checkbox/checkbox';
import UserCreateCharacterModal from '../UserCreateCharacterModal';
import { ButtonBig } from '../../common/buttons/button_big';

import { Title } from '../../common/pagetitle/style';
import COLOR from '../../../constants/color';
import FONT from '../../../constants/fonts';

import { Top, Content } from '../CharacterList/style';

const CharacterUser = ({ name }: { name: string }) => {
  const userList = useUserList(1, 50);
  const filterUserList = userList?.users.filter(
    (user) => user.character === name
  );
  const { value, handleChangeInput, reset } = useInput('');
  const { checkedList, updateCheckList, checkReset } = useUserCheckBox();

  const [isOpenCreateModal, setIsOpenCreateModal] = useState(false);

  const handleClickCreateModal = () => {
    setIsOpenCreateModal(!isOpenCreateModal);
  };

  return (
    <Container>
      <Content>
        <Top>
          <Title style={FONT.HEADING}>소속 유저</Title>
          {isOpenCreateModal && (
            <UserCreateCharacterModal
              setIsOpenCreateModal={setIsOpenCreateModal}
            />
          )}
          <IconWrapper onClick={handleClickCreateModal}>
            <PlusIcon />
          </IconWrapper>
        </Top>
        <InputFillBold
          value={value}
          placeholder={'유저 검색하기'}
          onChange={handleChangeInput}
          reset={reset}
        />
        <UserCheckBox
          data={filterUserList || []}
          updateCheckList={updateCheckList}
        />
      </Content>
      <ButtonBig
        content="유저 역할 해제"
        color={COLOR.GRAY2}
        onClick={() => {}}
      />
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

const IconWrapper = styled.button``;

export default CharacterUser;
