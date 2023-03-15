import { useState, useCallback } from 'react';

function useInputs(initialForm: any) {
  const [form, setFrom] = useState(initialForm);
  const onChange = useCallback((e: any) => {
    const { name, value } = e.target;
    setFrom((form: any) => ({ ...form, [name]: value }));
  }, []);
  const reset = useCallback(() => setFrom(initialForm), [initialForm]);

  return [form, onChange, reset];
}

export default useInputs;
