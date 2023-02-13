import styled from 'styled-components/macro';
import COLOR from '../../../constants/color';

import { waldregAxios } from '../../../apis/axios';

import usePermissionList from '../../../hooks/character/usePermissionList';
import useCharacterList from '../../../hooks/character/useCharacterList';
import useCreateCharacter from '../../../hooks/character/useCreateCharacter';
import { useInput } from '../../../hooks/common/useInput';
import { useCheckBox } from '../../../hooks/common/useCheckBox';

import { ICharacter } from '../../../interfaces/character';
import { Title } from '../../common/PageTitle/style';
import { InputAdd } from '../../common/inputs/input_add';
import { CheckBox } from '../../common/checkbox/checkbox';
import { ButtonBig } from '../../common/buttons/button_big';

const CharacterList = ({ handleClickChangeChar }: any) => {
  const charList = useCharacterList();
  const perList = usePermissionList();
  const { mutate } = useCreateCharacter();

  const handleClickGetToken = async () => {
    try {
      const response = await waldregAxios.post('/token', {
        user_id: 'Admin',
        user_password: '0000',
      });
      localStorage.setItem('accessToken', response.data.access_token);
    } catch (error) {
      console.log(error);
    }
  };

  const { value, handleChangeInput, reset } = useInput('');
  const { checkedList, updateCheckList, checkReset } = useCheckBox();

  const handleClickCreateChar = () => {
    mutate({ id: Date.now(), character_name: value, permissions: checkedList });
    reset();
    checkReset();
  };

  return (
    <Container>
      <Content>
        <button onClick={handleClickGetToken}>토큰 발급</button>
        <Title>역할</Title>
        <Characters>
          {charList?.map((character: ICharacter) => (
            <Character
              key={character.id}
              onClick={() => handleClickChangeChar(character.character_name)}
            >
              {character.character_name}
            </Character>
          ))}
        </Characters>
        <InputAdd
          value={value}
          onChange={handleChangeInput}
          reset={reset}
          placeholder={'추가할 역할 이름을 입력하세요'}
        />
        <CheckBox data={perList || []} updateCheckList={updateCheckList} />
      </Content>
      <ButtonBig
        content="역할 추가하기"
        color={COLOR.GREEN4}
        onClick={handleClickCreateChar}
      />
    </Container>
  );
};

const Container = styled.div`
  width: 70%;
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
  overflow: auto;
`;

const Characters = styled.div`
  display: flex;
  flex-direction: column;
  algin-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const Character = styled.div`
  width: 100%;
  padding: 1rem 0;

  cursor: pointer;
`;

export default CharacterList;
