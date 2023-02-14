import styled from 'styled-components';

import { Check } from './check';

import { Permission } from '../../../interfaces/character';

export interface IProps {
  data: Permission[];
  updateCheckList: any;
}

export const CheckBox = (props: IProps) => {
  return (
    <div>
      {props.data.map((item: Permission) => {
        return (
          <div key={item.permission_id}>
            <Check item={item} updateCheckList={props.updateCheckList} />
          </div>
        );
      })}
    </div>
  );
};
