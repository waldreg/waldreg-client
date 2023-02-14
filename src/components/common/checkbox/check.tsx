import { useState } from 'react';
import styled from 'styled-components';
import { Permission } from '../../../interfaces/character';

export interface IProps {
  item: Permission;
  updateCheckList: any;
}

export const Check = (props: IProps) => {
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

const CheckWrapper = styled.div``;
const CheckBox = styled.input<{ checked: boolean }>`
  width: 10px;
  height: 10px;
  background: ${(props) => (props.checked === true ? 'green' : 'white')};
`;
