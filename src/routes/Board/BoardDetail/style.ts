import styled from "styled-components";
import COLOR from "../../../constants/color";

const BoardTitle = styled.div`
  color: ${COLOR.GRAY5};
  margin-bottom: 1rem;
`;

const BoardTopBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
  border-bottom: 2px solid ${COLOR.GRAY0};
`;

const BoardInformationBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const BoardInformation = styled.div`
  color: ${COLOR.GRAY3};
  margin-right: 1rem;
`;

const BoardButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const BoardButton = styled.button`
  color: ${COLOR.GRAY3};
  margin-left: 1rem;
`;

const BoardContent = styled.div`
  color: ${COLOR.GRAY5};
  padding: 2rem 0 3rem;
`;

const BoardCommentCount = styled.div`
  color: ${COLOR.GRAY3};
  padding: 1rem 0;
  border-bottom: 2px solid ${COLOR.GRAY0};
`;

export {
  BoardTitle,
  BoardTopBox,
  BoardInformationBox,
  BoardInformation,
  BoardButtonBox,
  BoardButton,
  BoardContent,
  BoardCommentCount,
};
