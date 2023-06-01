import { useEffect, useState } from "react";

import { JoiningpoolUser } from "../../interfaces/joiningpoolUser";
import { Permission } from "../../interfaces/character";
import { User } from "../../interfaces/user";

export const usePermissionCheckBox = () => {
  const [checkedList, setCheckedList] = useState<Permission[]>([]);

  const updateCheckList = (isChecked: boolean, item: Permission) => {
    if (isChecked) {
      item.permission_status = "true";
      setCheckedList([...checkedList, item]);
    } else {
      item.permission_status = "false";
      setCheckedList(
        checkedList.filter((prev) => prev.permission_id !== item.permission_id)
      );
    }
  };

  const checkReset = () => {
    setCheckedList([]);
  };

  return { checkedList, updateCheckList, checkReset };
};

export const useUserCheckBox = () => {
  const [checkedList, setCheckedList] = useState<User[]>([]);

  const updateCheckList = (isChecked: boolean, item: User) => {
    if (isChecked) {
      setCheckedList([...checkedList, item]);
    } else {
      setCheckedList(checkedList.filter((prev) => prev.id !== item.id));
    }
  };

  const checkReset = () => {
    setCheckedList([]);
  };

  return { checkedList, updateCheckList, checkReset };
};

export const useJoiningpoolUserCheckBox = () => {
  const [checkedList, setCheckedList] = useState<JoiningpoolUser[]>([]);

  const updateCheckList = (isChecked: boolean, item: JoiningpoolUser) => {
    if (isChecked) {
      setCheckedList([...checkedList, item]);
    } else {
      setCheckedList(
        checkedList.filter((prev) => prev.user_id !== item.user_id)
      );
    }
  };

  const checkReset = () => {
    setCheckedList([]);
  };

  return { checkedList, updateCheckList, checkReset };
};

export const useToggleBox = (initialState: Permission[]) => {
  const [checkedList, setCheckedList] = useState<Permission[]>(initialState);
  useEffect(() => {
    setCheckedList(initialState);
  }, [initialState]);

  const updateCheckList = (isChecked: boolean, item: Permission) => {
    const prevList = checkedList.filter(
      (check) => check.permission_id !== item.permission_id
    );
    if (isChecked) {
      item.permission_status = "false";
      setCheckedList([...prevList, item]);
    } else {
      item.permission_status = "true";
      setCheckedList([...prevList, item]);
    }
  };

  return { checkedList, updateCheckList };
};
