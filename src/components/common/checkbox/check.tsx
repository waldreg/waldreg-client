import { useState } from 'react';
import styled from 'styled-components';
import { Permission } from '../../../interfaces/character';
import { User } from '../../../interfaces/user';

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
      <label htmlFor={props.item.permission_name}>
        {props.item.permission_name}
      </label>
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
`;

const CheckBox = styled.input<{ checked: boolean }>`
  width: 10px;
  height: 10px;
  background: ${(props) => (props.checked === true ? 'green' : 'white')};
`;

const Text = styled.label``;

const Id = styled.div`
  color: ${COLOR.GRAY2};
`;
