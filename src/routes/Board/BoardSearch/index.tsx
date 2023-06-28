import styled from "styled-components";
import Container from "../../../components/common/container";
import FONT from "../../../constants/fonts";
import COLOR from "../../../constants/color";

interface Option {
  value: string;
  name: string;
}

const OPTIONS: Option[] = [
  { value: "title", name: "제목" },
  { value: "content", name: "내용" },
  { value: "author", name: "글쓴이" },
];

const handleSearchClick = () => {
  console.log("검색 버튼 클릭");
};

const BoardSearch = () => {
  return (
    <SearchBox>
      <SearchTitle style={FONT.HEADING}>게시글 검색</SearchTitle>
      <SearchBarBox>
        <SearchSelectBox options={OPTIONS} />
        <SearchInput style={FONT.SUBTITLE2}></SearchInput>
        <SerachButton onClick={handleSearchClick}>검색</SerachButton>
      </SearchBarBox>
      <Container
        height={"default"}
        style={{
          margin: "3rem 0 1rem 0",
          padding: "1rem 2rem",
          justifyContent: "flex-start",
        }}
      ></Container>
    </SearchBox>
  );
};

const SearchSelectBox = (props: { options: Option[] }) => {
  return (
    <SelectBox>
      {props.options.map((option: Option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </SelectBox>
  );
};

const SearchBarBox = styled.div`
  display: flex;
  justify-content: center;
`;

const SearchTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0 2rem 0;
`;

const SearchBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const SelectBox = styled.select`
  width: 10rem;
  height: 3rem;
  border: 1px solid ${COLOR.GRAY2};
  border-radius: 0.5rem;
  padding: 0 1rem;
  margin-right: 1rem;
`;

const SearchInput = styled.input`
  width: 30rem;
  height: 3rem;
  border: 1px solid ${COLOR.GRAY2};
  border-radius: 0.5rem;
  padding: 0 1rem;
`;

const SerachButton = styled.button`
  width: 5rem;
  height: 3rem;
  border: none;
  border-radius: 0.5rem;
  margin-left: 1rem;
  background: ${COLOR.GREEN3};
  transition: background 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    background: ${COLOR.GREEN4};
  }
`;

export default BoardSearch;
