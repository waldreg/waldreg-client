import styled from 'styled-components';
import COLOR from '../../../constants/color';

const Toggle = (props: any) => {
  return (
    <ToggleContainer onClick={props.onClick} selected={props.toggle}>
      <Circle selected={props.toggle} />
    </ToggleContainer>
  );
};

const ToggleContainer = styled.div<{ selected: boolean }>`
  position: relative;

  min-width: 2.75rem;
  height: 1.5rem;
  border-radius: 2rem;

  cursor: pointer;
  ${(props) =>
    props.selected
      ? `background: ${COLOR.GREEN4};`
      : `background: ${COLOR.GRAY1};`}
`;

const Circle = styled.div<{ selected: boolean }>`
  position: absolute;
  top: 2px;
  ${(props) => (props.selected ? `right: 2px` : `left:2px`)};
  transition: 0.5s;

  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  background: ${COLOR.WHITE};
`;

export default Toggle;
