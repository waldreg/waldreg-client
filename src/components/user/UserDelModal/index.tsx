import styled from 'styled-components';

import useKickUser from '../../../hooks/user/useKickUser';

import Modal from '../../common/modal';
import { ButtonBig } from '../../common/buttons/button_big';
import COLOR from '../../../constants/color';
import FONT from '../../../constants/fonts';

import { User } from '../../../interfaces/user';

const UserDelModal = ({
  user,
  setIsOpenCreateModal,
}: {
  user: User;
  setIsOpenCreateModal: any;
}) => {
  const kickMutation = useKickUser();

  const handleClickKickUser = (id: number) => {
    kickMutation.mutate(id);
  };

  return (
    <Modal
      onClickToggleModal={() => setIsOpenCreateModal(false)}
      size={'small'}
    >
      <Content>
        <Name style={FONT.SUBTITLE3}>{user.name}</Name>
        <Text style={FONT.SUBTITLE2}>유저를 삭제하시겠습니까?</Text>
      </Content>
      <Buttons>
        <ButtonBig
          content={'취소'}
          color={COLOR.GRAY2}
          onClick={() => {
            setIsOpenCreateModal(false);
          }}
        />
        <ButtonBig
          content={'삭제'}
          color={COLOR.GREEN4}
          onClick={() => {
            setIsOpenCreateModal(false);
            handleClickKickUser(user.id);
          }}
        />
      </Buttons>
    </Modal>
  );
};

const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const Text = styled.div``;

const Name = styled.div`
  color: ${COLOR.GREEN4};
`;

const Buttons = styled.div`
  width: 100%;
  padding-top: 2rem;

  display: flex;
  gap: 2rem;
`;

export default UserDelModal;
