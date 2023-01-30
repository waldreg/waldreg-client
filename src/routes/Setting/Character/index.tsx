import { api } from '../../../apis/axios';

const Character = () => {
  const handleClickSignUp = async () => {
    try {
      const response = await api.post('/user', {
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
      const response = await api.post('/token', {
        user_id: 'ham',
        user_password: '1234!a5678',
      });
      console.log(response.data.access_token);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button onClick={handleClickSignUp}>회원가입</button>
      <button onClick={handleClickGetToken}>토큰 발급</button>
    </div>
  );
};

export default Character;
