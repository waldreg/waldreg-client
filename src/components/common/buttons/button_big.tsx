import styled from 'styled-components';
import COLOR from '../../../constants/color';

export const ButtonBig = ({
  content,
  onClick,
}: {
  content: string;
  onClick: any;
}) => {
  return <Wrapper onClick={onClick}>{content}</Wrapper>;
};

const Wrapper = styled.div`
  width: 100%;
  padding: 0.75rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${COLOR.GREEN4};
  border-radius: 0.5rem;

  color: ${COLOR.WHITE};
  cursor: pointer;
`;
