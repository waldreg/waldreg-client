import { useState, useEffect } from 'react';

const useToggle = (initialValue: boolean) => {
  const [toggle, setToggle] = useState<boolean>(initialValue);
  useEffect(() => setToggle(initialValue), [initialValue]);

  const onToggle = () => setToggle(!toggle);

  return { toggle, onToggle };
};

export default useToggle;
