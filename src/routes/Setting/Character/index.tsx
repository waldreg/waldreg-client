import styled from 'styled-components';
import { useQuery } from 'react-query';

import { waldregAxios } from '../../../apis/axios';
import { fetchCharacterList } from '../../../apis/characterAPI';
import { queryKeys } from '../../../types/queryKeys';

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

  const { data: charList } = useQuery<string[]>(
    queryKeys.character,
    fetchCharacterList
  );

  return (
    <>
      <button onClick={handleClickSignUp}>회원가입</button>
      <button onClick={handleClickGetToken}>토큰 발급</button>

      <Title>역할</Title>
      {charList?.map((character, idx) => (
        <Role key={idx}>{character}</Role>
      ))}
    </>
  );
};

const Title = styled.div``;
const Role = styled.div``;

export default Character;
