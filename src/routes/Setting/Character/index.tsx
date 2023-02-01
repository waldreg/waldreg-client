// import styled from 'styled-components';
import styled from 'styled-components';

import { useQuery } from 'react-query';
import { useInput } from '../../../hooks/useInput';

import { InputAdd } from '../../../components/inputs/input_add';

import { waldregAxios } from '../../../apis/axios';
import { characterAPI } from '../../../apis/characterAPI';
import { queryKeys } from '../../../types/queryKeys';

import {
  ICharacters,
  IPermission,
  ICharacter,
} from '../../../interfaces/character';
import FONT from '../../../constants/fonts';

const Character = () => {
  const handleClickSignUp = async () => {
    try {
      const response = await waldregAxios.post('/user', {
        name: '홍길동',
        user_id: 'ham',
        user_password: '1234!a5678',
        phone_number: '010-1234-1234',
      });

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

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

  const { data: charList } = useQuery<any>(queryKeys.character, () =>
    characterAPI.getCharacterList()
  );

  const { data: permissionList } = useQuery<any>(queryKeys.permissions, () =>
    characterAPI.getPermissionList()
  );

  const handleClickSubmit = () => {
    characterAPI.createCharacter({
      id: 10,
      character_name: value,
      permissions: [
        {
          permission_id: 3,
          permission_name: 'Read other user info permission',
          permission_status: 'true',
        },
      ],
    });
  };

  const { value, handleChangeInput, reset } = useInput('');

  console.log(permissionList);

  return (
    <>
      <button onClick={handleClickSignUp}>회원가입</button>
      <button onClick={handleClickGetToken}>토큰 발급</button>

      <Title>역할</Title>
      {charList?.map((character: ICharacter) => (
        <Role key={character.id}>{character.character_name}</Role>
      ))}
      <InputAdd
        value={value}
        placeholder={'역할을 추가하세요'}
        onChange={handleChangeInput}
        reset={reset}
      />
      <div>
        {permissionList?.map((permission: IPermission) => (
          <div key={permission.permission_id}>{permission.permission_name}</div>
        ))}
      </div>
      <button onClick={handleClickSubmit}>역할 등록</button>
    </>
  );
};

const Title = styled.div``;
const Role = styled.div``;

export default Character;
