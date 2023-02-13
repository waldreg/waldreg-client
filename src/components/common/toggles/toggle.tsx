import useToggle from '../../../hooks/common/useToggle';

const Toggle = ({ state }: { state: boolean }) => {
  const { toggle, onToggle } = useToggle(state);
  return <div onClick={() => onToggle()}>{String(toggle)}</div>;
};

export default Toggle;
