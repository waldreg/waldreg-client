import React from "react";
import { Title } from "./style";

const PageTitle = ({ children }: { children: React.ReactNode }) => (
  <Title>{children}</Title>
);

export default PageTitle;
