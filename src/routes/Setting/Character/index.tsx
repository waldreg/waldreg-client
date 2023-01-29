import { api } from '../../../apis/axios';

const Character = () => {
  const handleClickGetToken = async () => {
    try {
      const response = await api.post('/token', {
        user_id: 'ham',
        user_password: '1234!5678',
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button onClick={handleClickGetToken}>토큰 발급</button>
    </div>
  );
};

export default Character;
