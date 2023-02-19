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

  const handleInputFiles = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    handleFiles(e.target.files as FileList);
  };

  const handleInputFile = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    handleFile(e.target.files![0]);
  };

  const handleDropFiles = (e: DragEvent<HTMLDivElement>) => {
    console.log({ e }, e.dataTransfer.files);
    e.preventDefault();

    handleFiles(e.dataTransfer.files);
  };

  const handleFiles = (files: FileList) => {
    let fileList: Array<File> = [];

    if (files.length > 5) {
      alert(`파일 개수가 초과되었습니다.(최대 5개)`);
      return;
    }

    for (let i = 0; i < files.length; i++) {
      const file: File = files[i];
      const format: string = `${file.name.split(".").slice(-1)}`.toUpperCase();

      if (
        format === "JPG" ||
        format === "JPEG" ||
        format === "PNG" ||
        format === "PDF"
      ) {
        fileList = [...fileList, file];
      } else {
        alert(
          `파일 포맷을 확인해주세요.업로드 된 파일 이름 ${file.name} / 포맷 ${format}`
        );
        return;
      }
    }

    if (fileList.length > 0) {
      setFileList(fileList);
    }
  };

  const handleFile = (file: File): void => {
    if (fileList.length > 4) {
      alert(`파일 개수가 초과되었습니다`);
      return;
    }
    const updateFile: File = file;
    const format: string = `${file.name.split(".").slice(-1)}`.toUpperCase();

    if (
      format === "JPG" ||
      format === "JPEG" ||
      format === "PNG" ||
      format === "PDF"
    ) {
      setFileList([...fileList, updateFile]);
    } else {
      alert(
        `파일 포맷을 확인해주세요.업로드 된 파일 이름 ${file.name} / 포맷 ${format}`
      );
      return;
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
            onChange={handleInputFile}
          />
        </FileListBox>
      )}
    </FileBox>
  );
};

export default BoardFileUpload;
