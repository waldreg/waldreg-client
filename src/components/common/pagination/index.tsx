import FONT from "../../../constants/fonts";
import { PageButton, PageButtonBox } from "./style";

type PaginationProps = {
  pageNumber: number;
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
};

const Pagination = ({
  pageNumber,
  currentPage,
  setCurrentPage,
}: PaginationProps) => {
  const pages = [];

  for (let i = 0; i < pageNumber; i++) {
    const isCurrentPage = i + 1 === currentPage;

    pages.push(
      <PageButton
        key={i}
        onClick={() => {
          setCurrentPage(i + 1);
        }}
        isCurrentPage={isCurrentPage}
      >
        {i + 1}
      </PageButton>
    );
  }

  return <PageButtonBox style={FONT.BODY1}>{pages}</PageButtonBox>;
};

export default Pagination;
