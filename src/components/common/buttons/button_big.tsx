import styled from 'styled-components';
import COLOR from '../../../constants/color';

export const ButtonBig = ({
  content,
  color,
  onClick,
}: {
  content: string;
  color: string;
  onClick: any;
}) => {
  return (
    <Wrapper onClick={onClick} color={color}>
      {content}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ color: string }>`
  width: 100%;
  padding: 0.75rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${(props) => props.color};
  border-radius: 0.5rem;

  color: ${COLOR.WHITE};
  cursor: pointer;
`;
