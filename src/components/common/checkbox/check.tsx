import { useState } from 'react';
import styled from 'styled-components';

import { Permission } from '../../../interfaces/character';
import { User } from '../../../interfaces/user';

import { CheckIcon } from '../../Icons/BasicIcons';

import COLOR from '../../../constants/color';
import FONT from '../../../constants/fonts';

export interface IProps {
  item: Permission;
  updateCheckList: any;
}

export interface UserProps {
  item: User;
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
      <IconWrapper>{isChecked && <CheckIcon />}</IconWrapper>

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
      <IconWrapper>{isChecked && <CheckIcon />}</IconWrapper>

      <Text htmlFor={props.item.name} style={FONT.SUBTITLE2}>
        {props.item.name}
      </Text>
      <Id style={FONT.SUBTITLE1}>{props.item.user_id}</Id>
    </CheckWrapper>
  );
};

const CheckWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
`;

const CheckBox = styled.input<{ checked: boolean }>`
  width: 25px;
  height: 25px;

  border: 2px solid
    ${(props) =>
      props.checked === true ? `${COLOR.GREEN4}` : `${COLOR.GRAY2}`};
  border-radius: 0.5rem;

  background: ${(props) =>
    props.checked === true ? `${COLOR.GREEN4}` : 'white'};

  cursor: pointer;
`;

const IconWrapper = styled.div`
  padding: 5px;

  pointer-events: none;
  position: absolute;
`;

const Text = styled.label``;

const Id = styled.div`
  color: ${COLOR.GRAY2};
`;
