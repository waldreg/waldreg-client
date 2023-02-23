import styled from 'styled-components';

import usePermissionList from '../../../hooks/character/usePermissionList';
import useCreateCharacter from '../../../hooks/character/useCreateCharacter';
import { useInput } from '../../../hooks/common/useInput';
import { usePermissionCheckBox } from '../../../hooks/common/useCheckBox';

import Modal from '../../common/modal';
import { InputLine } from '../../common/inputs/input_line';
import { PermissionCheckBox } from '../../common/checkbox/checkbox';
import { ButtonBig } from '../../common/buttons/button_big';
import COLOR from '../../../constants/color';

const CharacterCreateModal = ({
  setIsOpenCreateModal,
}: {
  setIsOpenCreateModal: any;
}) => {
  const perList = usePermissionList();
  const { mutate } = useCreateCharacter();

  const { value, handleChangeInput, reset } = useInput('');
  const { checkedList, updateCheckList, checkReset } = usePermissionCheckBox();

  perList?.sort((prev, cur) => {
    if (prev.permission_id > cur.permission_id) return 1;
    else return -1;
  });

  const handleClickCreateChar = () => {
    mutate({ id: Date.now(), character_name: value, permissions: checkedList });
    reset();
    checkReset();
  };

  return (
    <Modal onClickToggleModal={() => setIsOpenCreateModal(false)} size={'big'}>
      <InputWrapper>
        <InputLine
          value={value}
          onChange={handleChangeInput}
          reset={reset}
          placeholder={'역할 이름'}
        />
      </InputWrapper>
      <PermissionCheckBox
        data={perList || []}
        updateCheckList={updateCheckList}
      />
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
            handleClickCreateChar();
            setIsOpenCreateModal(false);
          }}
        />
      </Buttons>
    </Modal>
  );
};

const InputWrapper = styled.div`
  width: 100%;
  padding-bottom: 0.75rem;
`;

const Buttons = styled.div`
  width: 100%;
  padding-top: 2rem;

  display: flex;
  gap: 2rem;
`;

export default CharacterCreateModal;
