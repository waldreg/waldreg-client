import { Outlet } from "react-router-dom";
import FONT from "../../../constants/fonts";
import { Container, Title } from "./style";

const BoardLayout = () => {
  return (
    <Container>
      <Title style={FONT.HEADING}>게시판 이름</Title>
      <Outlet />
    </Container>
  );
};

export default BoardLayout;
