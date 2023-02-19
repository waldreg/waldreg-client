import styled from 'styled-components';

import usePermissionList from '../../../hooks/character/usePermissionList';
import useCreateCharacter from '../../../hooks/character/useCreateCharacter';
import { useInput } from '../../../hooks/common/useInput';
import { useCheckBox } from '../../../hooks/common/useCheckBox';

import Modal from '../../common/modal';
import { InputFillThin } from '../../common/inputs/input_fill';
import { CheckBox } from '../../common/checkbox/checkbox';
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
  const { checkedList, updateCheckList, checkReset } = useCheckBox();

  const handleClickCreateChar = () => {
    mutate({ id: Date.now(), character_name: value, permissions: checkedList });
    reset();
    checkReset();
  };

  return (
    <Modal onClickToggleModal={() => setIsOpenCreateModal(false)}>
      <InputFillThin
        value={value}
        onChange={handleChangeInput}
        reset={reset}
        placeholder={'추가할 역할 이름을 입력하세요'}
      />
      <CheckBox data={perList || []} updateCheckList={updateCheckList} />
      <Buttons>
        <ButtonBig
          content={'취소'}
          color={COLOR.GRAY2}
          onClick={() => setIsOpenCreateModal(false)}
        />
        <ButtonBig
          content={'추가'}
          color={COLOR.GREEN4}
          onClick={handleClickCreateChar}
        />
      </Buttons>
    </Modal>
  );
};

const Buttons = styled.div`
  display: flex;
`;

export default CharacterCreateModal;
