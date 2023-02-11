import { useCallback, useState } from 'react';

const useToggle = (initialValue: boolean) => {
  const [toggle, setToggle] = useState<boolean>(initialValue);

  const onToggle = useCallback(() => setToggle(!toggle), []);

  return { toggle, onToggle };
};

export default useToggle;
