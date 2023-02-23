import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useBoardCreate } from "../../../hooks/board/useBoardCreate";
import { useRecoilValue } from "recoil";
import { boardCategoryState } from "../../../states/board";
import FONT from "../../../constants/fonts";
import {
  BoardButtonContainer,
  BoardContentTextArea,
  BoardTitleInput,
} from "./style";
import { BoardContainer } from "../BoardDetail/style";
import CreateButton from "../../common/createbutton";
import BoardFileUpload from "../BoardFileUpload";

const BoardCreate = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [fileList, setFileList] = useState<File[]>([]);
  const category_id = useRecoilValue(boardCategoryState);
  const navigate = useNavigate();

  const formData = new FormData();

  const data = {
    title: title,
    content: content,
    category_id: category_id,
    views: 0,
    comment_count: 0,
  };

  formData.append(
    "boardCreateRequest",
    new Blob([JSON.stringify(data)], { type: "application/json" })
  );

  const createMutation = useBoardCreate(formData);

  const handleCreateSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    createMutation.mutate();
    navigate(-1);
  };

  return (
    <BoardContainer>
      <form onSubmit={handleCreateSubmit}>
        <BoardTitleInput
          style={FONT.SUBTITLE2}
          type="text"
          placeholder="제목"
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setTitle(e.currentTarget.value)
          }
        />
        <BoardContentTextArea
          style={FONT.SUBTITLE1}
          placeholder="내용을 작성해주세요"
          onChange={(e: React.FormEvent<HTMLTextAreaElement>) =>
            setContent(e.currentTarget.value)
          }
        />
        <BoardFileUpload formData={formData} />
        <BoardButtonContainer>
          <CreateButton style={FONT.SUBTITLE1} onSubmit={handleCreateSubmit} />
        </BoardButtonContainer>
      </form>
    </BoardContainer>
  );
};

export default BoardCreate;
