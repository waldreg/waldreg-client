import styled from "styled-components";
import COLOR from "../../../constants/color";

const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid ${COLOR.GRAY1};
  padding: 1.1rem 0;
  cursor: pointer;
`;

const BoardInformationBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.6rem;
`;

const BoardInformation = styled.div`
  color: ${COLOR.GRAY3};
  margin-right: 1rem;
`;

const BoardInformationText = styled.div`
  margin-left: 0.3rem;
`;

const BoardContentBox = styled.div`
  display: flex;
`;

const BoardTitle = styled.div`
  color: ${COLOR.GRAY5};
  margin-right: 1.5rem;
`;

const BoardContent = styled.div`
  display: flex;
  align-items: center;
  color: ${COLOR.GRAY3};
  margin-right: 0.5rem;
`;

export {
  BoardContainer,
  BoardInformationBox,
  BoardInformation,
  BoardInformationText,
  BoardContentBox,
  BoardTitle,
  BoardContent,
};
