import Container from "../../../components/common/container";
import FONT from "../../../constants/fonts";
import { useState } from "react";
import BoardList from "../../../components/board/BoardList";
import { waldregAxios as axios } from "../../../apis/axios";
import {
  SearchBarBox,
  SearchBox,
  SearchInput,
  SearchText,
  SearchTitle,
  SelectBox,
  SerachButton,
} from "./style";
import { PaginationBox } from "../BoardPage/style";
import { LeftIcon, RightIcon } from "../../../components/Icons/BoardIcons";
import Pagination from "../../../components/common/pagination";

interface Option {
  value: string;
  name: string;
}

const OPTIONS: Option[] = [
  { value: "title", name: "제목" },
  { value: "content", name: "내용" },
  { value: "author", name: "글쓴이" },
];

const BoardSearch = () => {
  const [keyword, setKeyword] = useState("");
  const [type, setType] = useState("title");
  const [searchOpen, setSearchOpen] = useState(false);
  const [boardList, setBoardList] = useState(undefined);
  const [board, setBoard] = useState({ boards: [], max_idx: 0 });

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = currentPage * itemsPerPage;
  let itemsCount = board?.max_idx;

  if (!itemsCount) itemsCount = 1;

  const handleSearchClick = async () => {
    setSearchOpen(true);
    const { data } = await axios.get(
      `/board/search?type=${type}&keyword=${keyword}&from=${startItem}&to=${endItem}`
    );
    setBoardList(data);
    setBoard(data);
  };

  return (
    <SearchBox>
      <SearchTitle style={FONT.HEADING}>게시글 검색</SearchTitle>
      <SearchBarBox>
        <SearchSelectBox options={OPTIONS} setType={setType} />
        <SearchInput
          style={FONT.SUBTITLE2}
          onChange={(e) => setKeyword(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSearchClick();
            }
          }}
        ></SearchInput>
        <SerachButton onClick={handleSearchClick}>검색</SerachButton>
      </SearchBarBox>

      {searchOpen && (
        <>
          <Container
            height={"90%"}
            style={{
              margin: "1rem 0",
              padding: "1rem 2rem",
              justifyContent: "flex-start",
            }}
          >
            {boardList && board.boards.length > 0 ? (
              <BoardList boardList={boardList} />
            ) : (
              <SearchText style={FONT.BODY_2}>검색 결과가 없습니다.</SearchText>
            )}
          </Container>

          <PaginationBox>
            <LeftIcon
              disable={currentPage === 1}
              onClick={() => {
                setCurrentPage(currentPage - 1);
              }}
            />
            <Pagination
              pageNumber={itemsCount!! / 6}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
            <RightIcon
              disable={currentPage === Math.ceil(itemsCount!! / 6)}
              onClick={() => {
                setCurrentPage(currentPage + 1);
              }}
            />
          </PaginationBox>
        </>
      )}
    </SearchBox>
  );
};

const SearchSelectBox = (props: {
  options: Option[];
  setType: (value: string) => void;
}) => {
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    props.setType(value);
  };

  return (
    <SelectBox onChange={handleSelectChange}>
      {props.options.map((option: Option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </SelectBox>
  );
};

export default BoardSearch;
