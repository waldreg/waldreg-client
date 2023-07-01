import COLOR from "../../../constants/color";
import { CheckIcon } from "../../Icons/BasicIcons";
import FONT from "../../../constants/fonts";
import { JoiningpoolUser } from "../../../interfaces/joiningpoolUser";
import { Permission } from "../../../interfaces/character";
import { User } from "../../../interfaces/user";
import styled from "styled-components";
import { useState } from "react";

export interface IProps {
  item: Permission;
  updateCheckList: any;
}

export interface UserProps {
  item: User;
  updateCheckList: any;
}

export interface JoiningpoolUserProps {
  item: JoiningpoolUser;
  updateCheckList: any;
}

export const PermissionCheck = (props: IProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggleCheck = (e: any, item: Permission) => {
    setIsChecked(!isChecked);
    props.updateCheckList(e.target.checked, item);
  };

  return (
    <CheckWrapper>
      <CheckBox
        id={props.item.permission_name}
        type="checkbox"
        value={props.item.permission_name}
        onChange={(e: any) => handleToggleCheck(e, props.item)}
        checked={isChecked}
      />
      <IconWrapper>
        <CheckIcon isChecked={isChecked} />
      </IconWrapper>

      <Text htmlFor={props.item.permission_name} style={FONT.SUBTITLE2}>
        {props.item.permission_name}
      </Text>
    </CheckWrapper>
  );
};

export const UserCheck = (props: UserProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggleCheck = (e: any, item: User) => {
    setIsChecked(!isChecked);
    props.updateCheckList(e.target.checked, item);
  };

  return (
    <CheckWrapper>
      <CheckBox
        id={props.item.user_id}
        type="checkbox"
        value={props.item.name}
        onChange={(e: any) => handleToggleCheck(e, props.item)}
        checked={isChecked}
      />
      <IconWrapper>
        <CheckIcon isChecked={isChecked} />
      </IconWrapper>

      <Text htmlFor={props.item.name} style={FONT.SUBTITLE2}>
        {props.item.name}
      </Text>
      <Id style={FONT.SUBTITLE1}>{props.item.user_id}</Id>
    </CheckWrapper>
  );
};

export const JoiningpoolUserCheck = (props: JoiningpoolUserProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggleCheck = (e: any, item: JoiningpoolUser) => {
    setIsChecked(!isChecked);
    props.updateCheckList(e.target.checked, item);
  };

  return (
    <JoiningpoolCheckWrapper>
      <CheckBox
        id={props.item.user_id}
        type="checkbox"
        value={props.item.name}
        onChange={(e: any) => handleToggleCheck(e, props.item)}
        checked={isChecked}
      />
      <IconWrapper>
        <CheckIcon isChecked={isChecked} />
      </IconWrapper>

      <Text htmlFor={props.item.name} style={FONT.SUBTITLE2}>
        {props.item.name}
      </Text>
      <Id style={FONT.SUBTITLE2}>{props.item.user_id}</Id>
    </JoiningpoolCheckWrapper>
  );
};

const CheckWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
`;

const JoiningpoolCheckWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  position: relative;

  padding: 1.5rem 0;

  border-bottom: 2px solid #f4f5f3;
`;

const CheckBox = styled.input<{ checked: boolean }>`
  width: 25px;
  height: 25px;

  border: 2px solid
    ${(props) =>
      props.checked === true ? `${COLOR.GREEN4}` : `${COLOR.GRAY2}`};
  border-radius: 0.5rem;

  background: ${(props) =>
    props.checked === true ? `${COLOR.GREEN4}` : "white"};

  cursor: pointer;
`;

const IconWrapper = styled.div`
  padding: 5px;

  pointer-events: none;
  position: absolute;
`;

const Text = styled.label`
  color: ${COLOR.GRAY5};
`;

const Id = styled.div`
  color: ${COLOR.GRAY5};
`;
