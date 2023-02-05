import { useState, ChangeEvent } from 'react';

export interface IProps {
  permission_id: number;
  permission_name: string;
  permission_status: string;
}

export const useCheckBox = () => {
  const [checkedList, setCheckedList] = useState<IProps[]>([]);

  const updateCheckList = (isChecked: boolean, item: IProps) => {
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
