import { Outlet, Params, useParams } from "react-router-dom";
import FONT from "../../../constants/fonts";
import { Container, Title } from "./style";

const BoardLayout = () => {
  const { categoryId } = useParams<Params>();

  return (
    <Container>
      <Title style={FONT.HEADING}>{categoryId}</Title>
      <Outlet />
    </Container>
  );
};

export default BoardLayout;
