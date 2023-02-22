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
    <PermissionItems>
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
    </PermissionItems>
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

const PermissionItems = styled.div`
  width: 100%;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  overflow: auto;
`;
const UserItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
