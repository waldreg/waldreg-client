import styled from 'styled-components';
import { useState } from 'react';

import useUser from '../../../hooks/user/useUser';
import useEditUserCharacter from '../../../hooks/user/useEditUserCharacter';
import useCharacterList from '../../../hooks/character/useCharacterList';

import { ButtonBig } from '../../common/buttons/button_big';
import CharacterRadio from '../../common/radio';
import { Top } from '../../character/CharacterList/style';
import UserInfo from '../UserInfo';
import UserDelModal from '../UserDelModal';
import Container from '../../common/container';

import COLOR from '../../../constants/color';
import FONT from '../../../constants/fonts';

const UserSetting = ({ name }: { name: string }) => {
  const user = useUser(name);
  const editMutation = useEditUserCharacter();
  const characterList = useCharacterList();
  const [selected, setSelected] = useState(user?.character || 'Admin');
  const [isOpenCreateModal, setIsOpenCreateModal] = useState(false);

  const handleClickModal = () => {
    setIsOpenCreateModal(!isOpenCreateModal);
  };

  const handleClickEditUser = (id: number, char: string) => {
    editMutation.mutate({ id: id, character: char });
  };

  return (
    <Container width="40%">
      {user === undefined ? (
        <div>해당 유저가 존재하지 않습니다</div>
      ) : (
        <>
          <Content>
            {isOpenCreateModal && (
              <UserDelModal
                setIsOpenCreateModal={setIsOpenCreateModal}
                user={user}
              />
            )}
            <Top>
              <Title style={FONT.HEADING}>유저 관리</Title>
              <Text onClick={() => handleClickModal()} style={FONT.SUBTITLE2}>
                유저 강제 퇴장
              </Text>
            </Top>
            <UserInfo user={user} size={'big'} />
            <CharacterRadio
              data={characterList || []}
              selected={selected}
              setSelected={setSelected}
            />
          </Content>
          <ButtonBig
            content="유저 역할 수정"
            color={COLOR.GREEN4}
            onClick={() => handleClickEditUser(user.id, selected)}
          />
        </>
      )}
    </Container>
  );
};

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  overflow: auto;
`;

const Title = styled.div`
  width: max-content;
  white-space: nowrap;
`;

const Text = styled.button`
  width: max-content;
  color: ${COLOR.GREEN4};
`;

export default UserSetting;
