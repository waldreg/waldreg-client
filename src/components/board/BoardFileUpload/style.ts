import styled from "styled-components";
import COLOR from "../../../constants/color";

const FileBox = styled.div`
  width: 100%;
  background-color: ${COLOR.WHITE};
  border: 2px solid ${COLOR.GRAY0};
  border-radius: 0.7rem;
  padding: 1.3rem;
  margin-bottom: 1rem;
`;

const FileTitleBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.7rem;
`;

const FileTitle = styled.div`
  margin-left: 0.5rem;
  color: ${COLOR.GRAY2};
`;

const FileInput = styled.input`
  display: none;
`;

const FileChoiceBox = styled.div`
  width: 100%;
  color: ${COLOR.GRAY3};
`;

const FileChoiceLabel = styled.label`
  text-decoration: underline;
  text-underline-position: under;
  cursor: pointer;
  margin-right: 0.4rem;
  color: ${COLOR.GRAY4};
  font-weight: 00;
`;

const FileListBox = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 0.8rem;
`;

const FileDetailBox = styled.div`
  background: ${COLOR.GRAY1};
  border: 1px solid ${COLOR.GRAY3};
  border-radius: 0.7rem;
  padding: 0.3rem 0.5rem;
  margin-right: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.4rem;
`;

const FileDetailTitle = styled.div`
  color: ${COLOR.GRAY4};
  margin-right: 0.3rem;
`;

const FilePlusLabel = styled.label`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.3rem;
`;

export {
  FileBox,
  FileTitleBox,
  FileTitle,
  FileInput,
  FileChoiceBox,
  FileChoiceLabel,
  FileListBox,
  FileDetailBox,
  FileDetailTitle,
  FilePlusLabel,
};
