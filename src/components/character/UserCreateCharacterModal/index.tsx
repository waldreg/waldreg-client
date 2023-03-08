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
}: {
  setIsOpenCreateModal: any;
}) => {
  const userList = useUserList(1, 50);
  const { mutate } = useEditUserCharacter();

  const { value, handleChangeInput, reset } = useInput('');
  const { checkedList, updateCheckList, checkReset } = useUserCheckBox();

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
      {/* <UserItems>
        {filterList?.length === 0 || filterList === undefined ? (
          <div>검색된 유저가 없습니다</div>
        ) : (
          filterList.map((user: User) => (
            <UserItem
              key={user.id}
              onClick={() => handleClickChangeUser(user.user_id)}
            >
              <UserInfo user={user} size={'small'} />
            </UserItem>
          ))
        )}
      </UserItems> */}

      <UserCheckBox
        data={userList?.users || []}
        updateCheckList={updateCheckList}
      />
      <div>
        <div style={FONT.DETAIL1}>
          {checkedList.length === 0 ? (
            <></>
          ) : (
            <div>
              {checkedList[0].name} 외 {checkedList.length - 1} 명의 유저의
              역할을 {'Admin'} 으로 전환합니다
            </div>
          )}
        </div>
      </div>
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
  padding-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 5rem;
`;

const Buttons = styled.div`
  width: 100%;
  padding-top: 2rem;

  display: flex;
  gap: 2rem;
`;

export default UserCreateCharacterModal;
