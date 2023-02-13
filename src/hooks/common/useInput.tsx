import { useState, ChangeEvent } from 'react';

export const useInput = (initialState: string) => {
  const [value, setValue] = useState(initialState);

  const reset = () => {
    setValue('');
  };

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.value) {
      reset();
    } else {
      setValue(event.target.value);
    }
  };
  return { value, handleChangeInput, reset };
};
