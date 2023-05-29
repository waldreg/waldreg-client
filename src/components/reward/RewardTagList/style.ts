import styled from 'styled-components';
import COLOR from '../../../constants/color';

export const Container = styled.div`
  width: 60%;
  height: 100%;
  background: ${COLOR.WHITE};

  border-radius: 1rem;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Tags = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Tag = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Text = styled.div`
  width: 100%;
  padding: 1rem 1.4rem 1rem;

  border-radius: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${COLOR.GRAY1};
`;

export const Point = styled.div``;
