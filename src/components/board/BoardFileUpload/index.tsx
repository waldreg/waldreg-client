import React from "react";
import { ChangeEvent, DragEvent, useState } from "react";
import { FileDeleteIcon, FileIcon } from "../../Icons/BoardIcons";
import { PlusIcon } from "../../Icons/SettingIcons";
import FONT from "./../../../constants/fonts";
import {
  FileBox,
  FileChoiceBox,
  FileChoiceLabel,
  FileDetailBox,
  FileDetailTitle,
  FileInput,
  FileListBox,
  FilePlusLabel,
  FileTitle,
  FileTitleBox,
} from "./style";

const BoardFileUpload = () => {
  const [fileList, setFileList] = useState<Array<File>>([]);

  // TODO: 파일 다중 업로드 구현
  const handleInputFiles = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const files = e.target.files;
    handleUpdateFiles(files!!);
  };

  const handleDropFiles = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    handleUpdateFiles(files!!);
  };

  const handleUpdateFiles = (files: FileList) => {
    for (let i = 0; i < files.length; i++) {
      const file: File = files[i];
      setFileList([...fileList, file]);
    }
  };

  const dragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDeleteFile = (index: number) => {
    setFileList(fileList.filter((_, i) => i !== index));
  };

  return (
    <FileBox onDrop={handleDropFiles} onDragOver={dragOver}>
      <FileTitleBox>
        <FileIcon />
        <FileTitle style={FONT.SUBTITLE1}>파일 첨부</FileTitle>
      </FileTitleBox>
      {fileList.length === 0 ? (
        <>
          <FileChoiceBox style={FONT.SUBTITLE1}>
            <FileChoiceLabel htmlFor="input_file">파일 선택</FileChoiceLabel>
            또는 여기로 파일을 끌어오세요
          </FileChoiceBox>
          <FileInput
            id="input_file"
            type="file"
            multiple
            onChange={handleInputFiles}
          />
        </>
      ) : (
        <FileListBox>
          {fileList.map((e, i) => {
            return (
              <FileDetailBox key={i}>
                <FileDetailTitle>{e.name}</FileDetailTitle>
                {/* TODO: 파일 삭제 아이콘에 이벤트 등록 */}
                <span
                  onClick={() => handleDeleteFile(i)}
                  style={{ cursor: "pointer" }}
                >
                  <FileDeleteIcon />
                </span>
              </FileDetailBox>
            );
          })}
          <FilePlusLabel htmlFor="input_file" className="span">
            <PlusIcon />
          </FilePlusLabel>
          <FileInput
            id="input_file"
            type="file"
            multiple
            onChange={handleInputFiles}
          />
        </FileListBox>
      )}
    </FileBox>
  );
};

export default BoardFileUpload;
