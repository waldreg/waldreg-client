import styled from 'styled-components';

import useToggle from '../../../hooks/common/useToggle';

import { Permission } from '../../../interfaces/character';
import Toggle from '../../common/toggles/toggle';

const Permission = ({
  per,
  updateCheckList,
}: {
  per: Permission;
  updateCheckList: any;
}) => {
  const { toggle, onToggle } = useToggle(per.permission_status === 'true');

  return (
    <Content>
      <div>{per.permission_name}</div>
      <div>{per.permission_status}</div>
      <Toggle
        toggle={toggle}
        onClick={(e: any) => {
          onToggle();
          updateCheckList(e.target.selected, per);
        }}
      ></Toggle>
    </Content>
  );
};

const Content = styled.div`
  padding: 0.5rem;
  display: flex;
  gap: 1rem;
`;

export default Permission;
