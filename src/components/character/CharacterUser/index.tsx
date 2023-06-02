import { useState, useEffect } from 'react';
import styled from 'styled-components';

import useAllUserList from '../../../hooks/user/useAllUserList';
import { useInput } from '../../../hooks/common/useInput';
import { useUserCheckBox } from '../../../hooks/common/useCheckBox';
import useEditUserCharacter from '../../../hooks/user/useEditUserCharacter';

import { PlusIcon } from '../../Icons/SettingIcons';
import { InputFillThin } from '../../common/inputs/input_fill';
import { UserCheckBox } from '../../common/checkbox/checkbox';
import UserCreateCharacterModal from '../UserCreateCharacterModal';
import { ButtonBig } from '../../common/buttons/button_big';
import Container from '../../common/container';

import { Title } from '../../common/pagetitle/style';
import COLOR from '../../../constants/color';
import FONT from '../../../constants/fonts';

import { Top, Content } from '../CharacterList/style';

const CharacterUser = ({ name }: { name: string }) => {
  const { value, handleChangeInput, reset } = useInput('');
  const { checkedList, updateCheckList, checkReset } = useUserCheckBox();
  const { mutate } = useEditUserCharacter();

  useEffect(() => {
    return () => {
      checkReset();
    };
  }, [name]);

  const userList = useAllUserList(1, 50);
  const filterUserList = userList?.users.filter(
    (user) => user.character === name
  );
  const searchUserList =
    value === ''
      ? filterUserList
      : filterUserList?.filter((user) =>
          user.name.toLowerCase().includes(value.toLowerCase())
        );

  const [isOpenCreateModal, setIsOpenCreateModal] = useState(false);

  const handleClickCreateModal = () => {
    setIsOpenCreateModal(!isOpenCreateModal);
  };

  const handleClickDeleteCharacterUser = (id: number, char: string) => {
    mutate({ id: id, character: char });
  };

  return (
    <Container width="20vw">
      <Content>
        <Top>
          <Title style={FONT.HEADING}>소속 유저</Title>
          {isOpenCreateModal && (
            <UserCreateCharacterModal
              setIsOpenCreateModal={setIsOpenCreateModal}
              name={name}
            />
          )}
          <IconWrapper onClick={handleClickCreateModal}>
            <PlusIcon />
          </IconWrapper>
        </Top>
        <InputFillThin
          value={value}
          placeholder={'유저 검색하기'}
          onChange={handleChangeInput}
          reset={reset}
        />
        <UserCheckBox
          data={searchUserList || []}
          updateCheckList={updateCheckList}
        />
      </Content>
      <ButtonBig
        content={
          checkedList.length
            ? `${checkedList.length}명의 유저 역할 해제`
            : '유저 역할 해제'
        }
        color={checkedList.length ? COLOR.GREEN4 : COLOR.GRAY2}
        onClick={() => {
          checkedList.map((user) =>
            handleClickDeleteCharacterUser(user.id, 'Guest')
          );
        }}
      />
    </Container>
  );
};

const IconWrapper = styled.button``;

export default CharacterUser;
