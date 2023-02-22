import styled from 'styled-components';
import { useState } from 'react';

import useUser from '../../../hooks/user/useUser';
import useKickUser from '../../../hooks/user/useKickUser';
import useEditUserCharacter from '../../../hooks/user/useEditUserCharacter';
import useCharacterList from '../../../hooks/character/useCharacterList';

import { ButtonBig } from '../../common/buttons/button_big';
import CharacterRadio from '../../common/radio';
import { Top } from '../../character/CharacterList/style';
import UserInfo from '../UserInfo';

import COLOR from '../../../constants/color';
import FONT from '../../../constants/fonts';

const UserSetting = ({ name }: { name: string }) => {
  const user = useUser(name);
  const kickMutation = useKickUser();
  const editMutation = useEditUserCharacter();
  const characterList = useCharacterList();
  const [selected, setSelected] = useState(user?.character || 'Admin');

  const handleClickKickUser = (id: number) => {
    kickMutation.mutate(id);
  };

  const handleClickEditUser = (id: number, char: string) => {
    editMutation.mutate({ id: id, character: char });
  };

  return (
    <Container>
      {user === undefined ? (
        <div>해당 유저가 존재하지 않습니다</div>
      ) : (
        <>
          <Content>
            <Top>
              <Title style={FONT.HEADING}>유저 관리</Title>
              <Text
                onClick={() => handleClickKickUser(user.id)}
                style={FONT.SUBTITLE2}
              >
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

const Container = styled.div`
  width: 40%;
  height: 100%;
  background: ${COLOR.WHITE};

  border-radius: 1rem;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
`;

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
