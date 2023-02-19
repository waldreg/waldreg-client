import styled from "styled-components";

import useCharacter from "../../../hooks/character/useCharacter";
import useEditCharacter from "../../../hooks/character/useEditCharacter";
import useDeleteCharacter from "../../../hooks/character/useDeleteCharacter";
import { useInput } from "../../../hooks/common/useInput";
import { useToggleBox } from "../../../hooks/common/useCheckBox";

import { Title } from "../../common/pagetitle/style";
import { InputAdd } from "../../common/inputs/input_add";
import { ButtonBig } from "../../common/buttons/button_big";
import PermissionItem from "../Permission";

import { Permission } from "../../../interfaces/character";

import COLOR from "../../../constants/color";

const CharacterSetting = ({
  name,
  setChar,
}: {
  name: string;
  setChar: any;
}) => {
  const character = useCharacter(name);
  const editMutation = useEditCharacter(name);
  const deleteMutation = useDeleteCharacter();
  const { value, handleChangeInput, reset } = useInput(name);
  const { checkedList, updateCheckList } = useToggleBox(
    character?.permissions || []
  );

  return (
    <Container>
      <Title>역할 설정</Title>
      <Content>
        <InputAdd
          value={value}
          placeholder={""}
          onChange={handleChangeInput}
          reset={reset}
        />
        <Items>
          {checkedList?.map((permission: Permission) => (
            <PermissionItem
              key={permission.permission_id}
              per={permission}
              updateCheckList={updateCheckList}
            />
          ))}
        </Items>
      </Content>
      <ButtonBig
        content={"역할 수정하기"}
        color={COLOR.GREEN4}
        onClick={() => {
          editMutation.mutate({
            name: name,
            newChar: {
              character_name: value,
              permissions: character?.permissions || [],
            },
          });
        }}
      />
      <ButtonBig
        content={"역할 삭제하기"}
        color={COLOR.RED2}
        onClick={() => {
          deleteMutation.mutate(name);
          setChar("Admin");
        }}
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
  justify-content: space-between;
`;

const Content = styled.div`
  overflow: auto;
`;

const Items = styled.div``;

export default CharacterSetting;
