import { useState, ChangeEvent } from 'react';
import { ICharacter, IPermission } from '../interfaces/character';

export const useCheckBox = () => {
  const [checkedList, setCheckedList] = useState<IPermission[]>([]);

  const updateCheckList = (isChecked: boolean, item: IPermission) => {
    if (isChecked) {
      setCheckedList([...checkedList, item]);
    } else {
      setCheckedList(
        checkedList.filter((prev) => prev.permission_id !== item.permission_id)
      );
    }
  };

  const checkReset = () => {
    setCheckedList([]);
  };

  //   const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
  //     if (!event.target.value) {
  //       reset();
  //     } else {
  //       setCheckedList(event.target.value);
  //     }
  //   };

  return { checkedList, updateCheckList, checkReset };
};
