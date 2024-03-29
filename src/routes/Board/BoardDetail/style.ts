import styled from "styled-components";
import COLOR from "../../../constants/color";

const BoardTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0 1.4rem 0;
`;

const BoardTitle = styled.div`
  color: ${COLOR.GRAY5};
`;

const BoardTopBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
  border-bottom: 2px solid ${COLOR.GRAY0};
`;

const BoardFlexBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const BoardTop = styled.div``;

const BoardBottom = styled.div``;

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
  padding: 2rem 0;
`;

const BoardCommentCount = styled.div`
  color: ${COLOR.GRAY3};
  padding-bottom: 0.5rem;
  border-bottom: 2px solid ${COLOR.GRAY0};
  margin: 3rem 0 0.5rem 0;
`;

export {
  BoardTitleBox,
  BoardTitle,
  BoardFlexBox,
  BoardTop,
  BoardBottom,
  BoardTopBox,
  BoardInformationBox,
  BoardInformation,
  BoardButtonBox,
  BoardButton,
  BoardContent,
  BoardCommentCount,
};
