import styled from "styled-components";
import COLOR from "../../../constants/color";

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

export {
  SearchBarBox,
  SearchTitle,
  SearchBox,
  SelectBox,
  SearchInput,
  SerachButton,
};
