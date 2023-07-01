import { ChangeEvent, DragEvent, useState } from "react";
import {
  FileBox,
  FileChoiceBox,
  FileChoiceLabel,
  FileDetailBox,
  FileDetailTitle,
  FileInput,
  FileTitle,
  FileTitleBox,
} from "./style";
import { FileDeleteIcon, FileIcon } from "../../Icons/BoardIcons";

import FONT from "./../../../constants/fonts";
import { useApplicationFileUpload } from "../../../hooks/application/useApplicationFileUpload";

const ApplicationFileUpload = () => {
  const [formData, setFormdata] = useState<FormData>();

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
    const updatedFormData = new FormData();
    updatedFormData.append("logo", file);
    setFile(file);
    setFormdata(updatedFormData);
  };

  const dragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDeleteFile = () => {
    formData?.delete("logo");
    setFile(undefined);
  };

  const createMutation = useApplicationFileUpload(formData);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    createMutation.mutate();
  };

  return (
    <>
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
              <FileDeleteIcon onClick={handleDeleteFile} />
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
      <button onClick={handleSubmit}>적용</button>
    </>
  );
};

export default ApplicationFileUpload;
