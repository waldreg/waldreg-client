import styled from 'styled-components';
import { PermissionCheck, UserCheck } from './check';

import { Permission } from '../../../interfaces/character';
import { User } from '../../../interfaces/user';

export interface IProps {
  data: Permission[];
  updateCheckList: any;
}

export interface UsersProps {
  data: User[];
  updateCheckList: any;
}

export const PermissionCheckBox = (props: IProps) => {
  return (
    <div>
      {props.data.map((item: Permission) => {
        return (
          <div key={item.permission_id}>
            <PermissionCheck
              item={item}
              updateCheckList={props.updateCheckList}
            />
          </div>
        );
      })}
    </div>
  );
};

export const UserCheckBox = (props: UsersProps) => {
  return (
    <UserItems>
      {props.data.map((item: User) => {
        return (
          <div key={item.user_id}>
            <UserCheck item={item} updateCheckList={props.updateCheckList} />
          </div>
        );
      })}
    </UserItems>
  );
};

const UserItems = styled.div``;
