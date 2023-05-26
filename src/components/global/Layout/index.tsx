import React, { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import COLOR from '../../../constants/color';

import NavBar from '../NavBar';
import TopBar from '../TopBar';

const Layout = ({ children }: { children?: ReactElement }) => {
  return (
    <Wrapper>
      <TopBar />
      <NavBar />
      {children ? (
        <Container>{children}</Container>
      ) : (
        <Container>
          <Outlet />
        </Container>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: max-content;
  min-width: 100vw;
  height: 100%;

  display: flex;
  position: relative;
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 6.5rem 2.2rem 2.2rem 2.2rem;

  background: ${COLOR.BG};

  display: flex;
  align-items: center;
  gap: 3rem;
`;

export default Layout;
