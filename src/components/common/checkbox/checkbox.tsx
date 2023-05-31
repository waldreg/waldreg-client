import { JoiningpoolUserCheck, PermissionCheck, UserCheck } from "./check";

import { JoiningpoolUser } from "../../../interfaces/joiningpoolUser";
import { Permission } from "../../../interfaces/character";
import { User } from "../../../interfaces/user";
import styled from "styled-components";

export interface IProps {
  data: Permission[];
  updateCheckList: any;
}

export interface UsersProps {
  data: User[];
  updateCheckList: any;
  type?: string;
}

export interface JoiningpoolUsersProps {
  data: JoiningpoolUser[];
  updateCheckList: any;
  type?: string;
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
    <UserItems type={props.type}>
      {props.data.map((item: User) => {
        return (
          <UserItem key={item.user_id}>
            <UserCheck item={item} updateCheckList={props.updateCheckList} />
          </UserItem>
        );
      })}
    </UserItems>
  );
};

export const JoiningpoolUserCheckBox = (props: JoiningpoolUsersProps) => {
  return (
    <JoiningpoolUserItems>
      {props.data.map((item: JoiningpoolUser) => {
        return (
          <UserItem key={item.user_id}>
            <JoiningpoolUserCheck
              item={item}
              updateCheckList={props.updateCheckList}
            />
          </UserItem>
        );
      })}
    </JoiningpoolUserItems>
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

const UserItems = styled.div<{ type: any }>`
  width: 100%;
  display: ${(props) => (props.type === "grid" ? "grid" : "flex")};
  flex-direction: column;
  gap: 1rem;

  grid-template-columns: 1fr 1fr;
  row-gap: 1rem;
  column-gap: 1rem;
`;

const JoiningpoolUserItems = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const UserItem = styled.div`
  width: 100%;
`;
