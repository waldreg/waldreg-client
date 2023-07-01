import { ChangeEvent, DragEvent, useState } from "react";
import {
  FileBox,
  FileChoiceBox,
  FileChoiceLabel,
  FileDetailBox,
  FileDetailTitle,
  FileInput,
  FilePlusLabel,
  FileTitle,
  FileTitleBox,
} from "./style";
import { FileDeleteIcon, FileIcon } from "../../Icons/BoardIcons";

import FONT from "./../../../constants/fonts";
import { PlusIcon } from "../../Icons/SettingIcons";

const ApplicationFileUpload = () => {
  const [file, setFile] = useState<File>();

  const handleInputFiles = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const selectedFile = e.target.files?.[0];

    if (selectedFile?.type.startsWith("image")) {
      setFile(selectedFile);
      console.log(selectedFile);
      handleUpdateFiles(selectedFile!!);
    } else {
      alert("이미지 파일을 업로드해주세요.");
    }
  };

  const handleDropFiles = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const selectedFile = e.dataTransfer.files?.[0];

    if (selectedFile?.type.startsWith("image")) {
      setFile(selectedFile);
      console.log(selectedFile);
      handleUpdateFiles(selectedFile!!);
    } else {
      alert("이미지 파일을 업로드해주세요.");
    }
  };

  const handleUpdateFiles = (file: File) => {
    setFile(file);
  };

  const dragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <FileBox onDrop={handleDropFiles} onDragOver={dragOver}>
      <FileTitleBox>
        <FileIcon />
        <FileTitle style={FONT.SUBTITLE1}>파일 첨부</FileTitle>
      </FileTitleBox>
      {!file ? (
        <>
          <FileChoiceBox style={FONT.SUBTITLE1}>
            <FileChoiceLabel htmlFor="input_file">파일 선택</FileChoiceLabel>
            또는 여기로 파일을 끌어오세요
          </FileChoiceBox>
          <FileInput
            id="input_file"
            type="file"
            multiple={false}
            onChange={handleInputFiles}
          />
        </>
      ) : (
        <>
          <FileDetailBox>
            <FileDetailTitle style={FONT.SUBTITLE1}>
              {file.name}
            </FileDetailTitle>
            <FileDeleteIcon />
          </FileDetailBox>
          <FileInput
            id="input_file"
            type="file"
            multiple
            onChange={handleInputFiles}
          />
        </>
      )}
    </FileBox>
  );
};

export default ApplicationFileUpload;
