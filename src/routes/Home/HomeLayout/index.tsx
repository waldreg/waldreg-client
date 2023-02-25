import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from "./style";

const HomeLayout = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};

export default HomeLayout;
