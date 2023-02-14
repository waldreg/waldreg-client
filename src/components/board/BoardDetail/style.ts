import styled from "styled-components";
import COLOR from "../../../constants/color";

const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.8rem;
  background: ${COLOR.WHITE};
  padding: 2rem 1.7rem;
  margin: 1.4rem 0;
`;

const BoardTitle = styled.div`
  color: ${COLOR.GRAY5};
  margin-bottom: 1rem;
`;

const BoardTopBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 2rem;
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
  padding: 2rem 0 4rem;
  border-bottom: 2px solid ${COLOR.GRAY0};
`;

export {
  BoardContainer,
  BoardTitle,
  BoardTopBox,
  BoardInformationBox,
  BoardInformation,
  BoardButtonBox,
  BoardButton,
  BoardContent,
};
