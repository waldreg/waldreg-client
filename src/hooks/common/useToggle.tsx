import { useState } from 'react';

const useToggle = (initialValue: boolean) => {
  const [toggle, setToggle] = useState<boolean>(initialValue);

  const onToggle = () => setToggle(!toggle);

  return { toggle, onToggle };
};

export default useToggle;
