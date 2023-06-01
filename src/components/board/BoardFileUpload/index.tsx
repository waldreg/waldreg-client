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
  setFormData?: React.Dispatch<React.SetStateAction<FormData>>;
  files?: any;
  deleteFile?: string[];
  create?: boolean;
  update?: boolean;
}

const BoardFileUpload = ({
  formData,
  setFormData,
  files,
  deleteFile,
  create,
  update,
}: BoardFileUploadProps) => {
  const [fileList, setFileList] = useState<File[]>([]);

  useEffect(() => {
    if (files) {
      setFileList(files);
    }
  }, [files]);

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
    const newFileList: File[] = Array.from(files);

    newFileList.forEach((file) => {
      const fileType = getFileType(file);
      if (fileType === "file") {
        formData.append("file", file);
      } else if (fileType === "image") {
        formData.append("image", file);
      }
    });

    setFileList([...fileList, ...newFileList]);
  };

  const getFileType = (file: File): string => {
    const fileType = file.type;
    if (fileType.startsWith("image")) {
      return "image";
    } else {
      return "file";
    }
  };

  const handleDeleteFile = (idx: number) => {
    const deletedFile: any = fileList[idx];

    if (update) {
      deleteFile?.push(deletedFile.uuid);
    }

    setFileList((prevFileList) => {
      const updatedFileList = [...prevFileList];
      updatedFileList.splice(idx, 1);
      return updatedFileList;
    });

    if (create) {
      const fileType = getFileType(deletedFile);
      const updatedFormData = new FormData();

      if (fileType === "file") {
        formData.delete("file");
      } else if (fileType === "image") {
        formData.delete("image");
      }

      fileList.forEach((file) => {
        if (file !== deletedFile) {
          if (fileType === "file") {
            updatedFormData.append("file", file);
          } else if (fileType === "image") {
            updatedFormData.append("image", file);
          }
        }
      });

      if (setFormData) {
        setFormData(updatedFormData);
      }
    }
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
          {fileList.map((e: any, i) => {
            return (
              <FileDetailBox key={i}>
                <FileDetailTitle style={FONT.SUBTITLE1}>
                  {e.name} {e.origin}
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
