import styled from 'styled-components';

import useToggle from '../../../hooks/common/useToggle';

import { IPermission } from '../../../interfaces/character';
import Toggle from '../../common/toggles/toggle';

const Permission = (props: IPermission) => {
  const { toggle, onToggle } = useToggle(props.permission_status === 'true');

  return (
    <Content>
      <div>{props.permission_name}</div>
      <div>{props.permission_status}</div>
      <Toggle toggle={toggle} onClick={() => onToggle()}></Toggle>
    </Content>
  );
};

const Content = styled.div`
  padding: 0.5rem;
  display: flex;
  gap: 1rem;
`;

export default Permission;
