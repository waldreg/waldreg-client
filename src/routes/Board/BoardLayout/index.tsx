import { Container, Title } from "./style";
import { Outlet, useParams } from "react-router-dom";

import FONT from "../../../constants/fonts";
import { useBoardCategory } from "../../../hooks/board/category/useBoardCategory";

const BoardLayout = () => {
  const { categoryId } = useParams();
  const categoryName = useBoardCategory(parseInt(categoryId!!));

  return (
    <Container>
      <Title style={FONT.HEADING}>
        {categoryName.boardCategory?.category_name}
      </Title>
      <Outlet />
    </Container>
  );
};

export default BoardLayout;
