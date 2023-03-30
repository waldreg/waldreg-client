import { Outlet } from "react-router-dom";
import { Container } from "../../Board/BoardLayout/style";

const HomeLayout = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};

export default HomeLayout;
