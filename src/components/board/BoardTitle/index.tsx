import React from "react";
import FONT from "../../../constants/fonts";
import { Title } from "./style";
// import {} from "styled-components/cssprop";

type BoardTitleProps = {
  children: React.ReactNode;
};

const BoardTitle: React.FC<BoardTitleProps> = ({ children }) => (
  <Title>{children}</Title>
);

export default BoardTitle;
