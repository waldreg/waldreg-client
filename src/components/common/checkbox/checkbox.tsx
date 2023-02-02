import styled from 'styled-components';

import { Check } from './check';

import { IPermission } from '../../../interfaces/character';

export interface IProps {
  data: IPermission[];
  updateCheckList: any;
}

export const CheckBox = (props: IProps) => {
  return (
    <div>
      {props.data.map((item: IPermission) => {
        return (
          <div key={item.permission_id}>
            {item.permission_id}
            <Check item={item} updateCheckList={props.updateCheckList} />
          </div>
        );
      })}
    </div>
  );
};
