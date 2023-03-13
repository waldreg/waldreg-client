import styled from 'styled-components';

import useUserList from '../../../hooks/user/useUserList';
import useEditUserCharacter from '../../../hooks/user/useEditUserCharacter';
import { useInput } from '../../../hooks/common/useInput';
import { useUserCheckBox } from '../../../hooks/common/useCheckBox';

import Modal from '../../common/modal';
import { InputFillThin } from '../../common/inputs/input_fill';
import { UserCheckBox } from '../../common/checkbox/checkbox';
import { ButtonBig } from '../../common/buttons/button_big';
import COLOR from '../../../constants/color';

import { Title } from '../../common/pagetitle/style';

import FONT from '../../../constants/fonts';

const UserCreateCharacterModal = ({
  setIsOpenCreateModal,
  name,
}: {
  setIsOpenCreateModal: any;
  name: string;
}) => {
  const userList = useUserList(1, 50);
  const { mutate } = useEditUserCharacter();

  const { value, handleChangeInput, reset } = useInput('');
  const { checkedList, updateCheckList, checkReset } = useUserCheckBox();

  const filterUserList = userList?.users.filter(
    (user) => user.character !== name
  );
  const searchUserList =
    value === ''
      ? filterUserList
      : filterUserList?.filter((user) =>
          user.name.toLowerCase().includes(value.toLowerCase())
        );

  const handleClickEditUserChar = () => {
    // mutate({ id: Date.now(), character_name: value, permissions: checkedList });
    // reset();
    // checkReset();
  };

  return (
    <Modal onClickToggleModal={() => setIsOpenCreateModal(false)} size={'big'}>
      <Top>
        <Title style={FONT.HEADING}>유저 목록</Title>
        <InputFillThin
          value={value}
          placeholder={'유저 이름'}
          onChange={handleChangeInput}
          reset={reset}
        />
      </Top>

      <UserItems>
        {searchUserList?.length === 0 || searchUserList === undefined ? (
          <div>검색된 유저가 없습니다</div>
        ) : (
          <UserCheckBox
            data={searchUserList || []}
            updateCheckList={updateCheckList}
          />
        )}
      </UserItems>

      <Description>
        <div style={FONT.DETAIL1}>
          {checkedList.length === 0 ? (
            <></>
          ) : checkedList.length === 1 ? (
            <div>
              {checkedList[0].name} 유저의 역할을 {name} 으로 전환합니다
            </div>
          ) : (
            <div>
              {checkedList[0].name} 외 {checkedList.length - 1} 명의 유저의
              역할을 {name} 으로 전환합니다
            </div>
          )}
        </div>
      </Description>

      <Buttons>
        <ButtonBig
          content={'취소'}
          color={COLOR.GRAY2}
          onClick={() => setIsOpenCreateModal(false)}
        />
        <ButtonBig
          content={'추가'}
          color={COLOR.GREEN4}
          onClick={() => {
            handleClickEditUserChar();
            setIsOpenCreateModal(false);
          }}
        />
      </Buttons>
    </Modal>
  );
};

const Top = styled.div`
  width: 100%;
  padding-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 5rem;
`;

const UserItems = styled.div`
  width: 100%;
  height: 100%;
`;

const Description = styled.div`
  height: 2rem;
  bottom: 0;

  color: ${COLOR.GRAY3};
`;

const Buttons = styled.div`
  width: 100%;
  padding-top: 2rem;

  display: flex;
  gap: 2rem;
`;

export default UserCreateCharacterModal;
