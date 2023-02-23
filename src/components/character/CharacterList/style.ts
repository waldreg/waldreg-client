import styled from 'styled-components';
import COLOR from '../../../constants/color';

export const Container = styled.div`
  width: 50%;
  height: 100%;
  background: ${COLOR.WHITE};

  border-radius: 1rem;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  overflow: auto;
`;

export const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const IconWrapper = styled.button``;

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  algin-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const Item = styled.div<{ selected?: boolean }>`
  color: ${COLOR.GRAY3};
  padding: 0.8rem 1rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  &:link {
    transition: 0.5s;
    text-decoration: none;
  }
  &:hover {
    background: ${COLOR.GREEN2};
    color: ${COLOR.BLACK};
  }
  background: ${(props) => (props.selected ? COLOR.GREEN2 : COLOR.WHITE)};
  color: ${(props) => (props.selected ? COLOR.BLACK : COLOR.GRAY3)};
  cursor: pointer;
`;
