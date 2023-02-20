import styled from 'styled-components';
import COLOR from '../../../constants/color';
import FONT from '../../../constants/fonts';

const TopBar = () => {
  return <Wrapper></Wrapper>;
};

const Wrapper = styled.div`
  width: 100%;
  height: 4.5rem;
  position: absolute;
  top: 0;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  background: ${COLOR.WHITE};
`;

const User = styled.div`
  height: 100%;
  padding: 3rem;

  display: flex;
  align-items: center;
  gap: 2rem;
`;

const Text = styled.div`
  color: ${COLOR.GRAY4};
`;

const Btn = styled.div`
  padding: 0.25rem 1rem;
  border-radius: 0.5rem;
  border: 2px solid ${COLOR.GREEN4};

  color: ${COLOR.GREEN4};

  cursor: pointer;
`;

export default TopBar;
