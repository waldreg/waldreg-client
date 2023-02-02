import styled from 'styled-components';

import { useQuery } from 'react-query';
import { useInput } from '../../../hooks/useInput';
import { useCheckBox } from '../../../hooks/useCheckBox';

import { InputAdd } from '../../../components/common/inputs/input_add';

import { waldregAxios } from '../../../apis/axios';
import { characterAPI } from '../../../apis/characterAPI';
import { characterKeys, permissionKeys } from '../../../types/settingKeys';

import { IPermission, ICharacter } from '../../../interfaces/character';

import { CheckBox } from '../../../components/common/checkbox/checkbox';

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

  const { data: charList } = useQuery<ICharacter[]>(characterKeys.all, () =>
    characterAPI.getCharacterList()
  );

  const { data: permissionList } = useQuery<IPermission[]>(
    permissionKeys.all,
    () => characterAPI.getPermissionList()
  );

  // 요런 식으로 다 커스텀 훅으로 뺄 예정
  const useCharQuery = (name: string) => {
    return useQuery<ICharacter>(characterKeys.detail(name), () =>
      characterAPI.getCharacter(name)
    ).data;
  };

  // useMutation으로 전환예정
  const handleClickDelete = (name: string) => {
    characterAPI.delCharacter(name);
  };

  const handleClickEdit = (name: string) => {
    characterAPI.editCharacter(name, {
      character_name: name,
      permissions: [
        {
          permission_id: 8,
          permission_name: 'Character manager',
          permission_status: 'true',
        },
      ],
    });
  };

  const handleClickSubmit = () => {
    characterAPI.createCharacter({
      id: 2,
      character_name: value,
      permissions: checkedList,
    });
  };

  console.log(useCharQuery('Guest'));

  const { value, handleChangeInput, reset } = useInput('');
  const { checkedList, updateCheckList, checkReset } = useCheckBox();

  return (
    <>
      <button onClick={handleClickSignUp}>회원가입</button>
      <button onClick={handleClickGetToken}>토큰 발급</button>

      <Title>역할</Title>
      {charList?.map((character: ICharacter) => (
        <Role key={character.id}>
          {character.id} {character.character_name}
          <button onClick={() => handleClickEdit(character.character_name)}>
            역할 수정하기
          </button>
          <button onClick={() => handleClickDelete(character.character_name)}>
            역할 삭제하기
          </button>
        </Role>
      ))}
      <InputAdd
        value={value}
        placeholder={'역할을 추가하세요'}
        onChange={handleChangeInput}
        reset={reset}
      />
      <CheckBox
        data={
          permissionList || [
            {
              permission_id: 0,
              permission_name: '권한이 없습니다',
              permission_status: 'false',
            },
          ]
        }
        updateCheckList={updateCheckList}
      />

      <button onClick={handleClickSubmit}>역할 등록</button>

      <div></div>
    </>
  );
};

const Title = styled.div``;
const Role = styled.div``;

export default Character;
