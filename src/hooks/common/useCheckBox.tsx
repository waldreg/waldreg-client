import { useState, ChangeEvent, useEffect } from 'react';
import { Permission } from '../../interfaces/character';

export const useCheckBox = () => {
  const [checkedList, setCheckedList] = useState<Permission[]>([]);

  const updateCheckList = (isChecked: boolean, item: Permission) => {
    if (isChecked) {
      item.permission_status = 'true';
      setCheckedList([...checkedList, item]);
    } else {
      item.permission_status = 'false';
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
      item.permission_status = 'false';
      setCheckedList([...prevList, item]);
    } else {
      item.permission_status = 'true';
      setCheckedList([...prevList, item]);
    }
  };

  return { checkedList, updateCheckList };
};
