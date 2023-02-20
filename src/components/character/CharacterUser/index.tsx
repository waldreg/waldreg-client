import styled from 'styled-components';

import useUserList from '../../../hooks/user/useUserList';
import { useInput } from '../../../hooks/common/useInput';
import { useCheckBox } from '../../../hooks/common/useCheckBox';

import { PlusIcon } from '../../Icons/SettingIcons';
import { InputFillBold } from '../../common/inputs/input_fill';
import { UserCheckBox } from '../../common/checkbox/checkbox';

import { Title } from '../../common/pagetitle/style';
import COLOR from '../../../constants/color';
import FONT from '../../../constants/fonts';

import { Top } from '../CharacterList/style';

const CharacterUser = ({ name }: { name: string }) => {
  const userList = useUserList(1, 50);
  const filterUserList = userList?.users.filter(
    (user) => user.character === name
  );
  const { value, handleChangeInput, reset } = useInput('');
  const { checkedList, updateCheckList, checkReset } = useCheckBox();

  return (
    <Container>
      <Top>
        <Title style={FONT.HEADING}>소속 유저</Title>
        <IconWrapper>
          <PlusIcon />
        </IconWrapper>
      </Top>
      <InputFillBold
        value={value}
        placeholder={'유저 검색하기'}
        onChange={handleChangeInput}
        reset={reset}
      />
      <UserCheckBox
        data={filterUserList || []}
        updateCheckList={updateCheckList}
      />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: ${COLOR.WHITE};

  border-radius: 1rem;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const IconWrapper = styled.button``;

export default CharacterUser;
