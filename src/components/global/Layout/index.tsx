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
  height: 100%;
  width: 100%;
  display: flex;
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 7.5rem 3rem 3rem 3rem;

  background: ${COLOR.BG};

  display: flex;
  align-items: center;
  gap: 3rem;
`;

export default Layout;
