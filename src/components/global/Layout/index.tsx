import React from 'react';
import styled from 'styled-components';
import COLOR from '../../../constants/color';

import NavBar from '../NavBar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Wrapper>
      <NavBar />
      <Container>{children}</Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 3rem;

  background: ${COLOR.BG};

  display: flex;
  align-items: center;
  gap: 3rem;
`;

export default Layout;
