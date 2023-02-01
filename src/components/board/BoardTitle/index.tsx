import React from "react";
import FONT from "../../../constants/fonts";
import { Title } from "./style";
// import {} from "styled-components/cssprop";

const BoardTitle = ({ children }: { children: React.ReactNode }) => (
  <Title>{children}</Title>
);

export default BoardTitle;
