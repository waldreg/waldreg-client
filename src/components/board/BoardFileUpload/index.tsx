import { ChangeEvent, DragEvent, useEffect, useState } from "react";
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

interface BoardFileUploadProps {
  formData: FormData;
}

const BoardFileUpload = ({ formData }: BoardFileUploadProps) => {
  const [fileList, setFileList] = useState<File[]>([]);

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
    const newFileList: File[] = [];

    for (let i = 0; i < files.length; i++) {
      const file: File = files[i];
      newFileList.push(file);
      formData.append("file", file);
    }
    for (let i = 0; i < newFileList.length; i++) {
      const file: File = newFileList[i];
      formData.append("file", file);
    }
    setFileList([...fileList, ...newFileList]);
  };

  const handleDeleteFile = (index: number) => {
    setFileList(fileList.filter((_, i) => i !== index));
    formData.delete("file");
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
                <FileDetailTitle style={FONT.SUBTITLE1}>
                  {e.name}
                </FileDetailTitle>
                <FileDeleteIcon onClick={() => handleDeleteFile(i)} />
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
