import { useState } from "react";
import { Params, useNavigate, useParams } from "react-router";
import { useRecoilValue } from "recoil";
import FONT from "../../../constants/fonts";
import { useBoardDetail } from "../../../hooks/board/useBoardDetail";
import { boardCategoryState } from "../../../states/board";
import CreateButton from "../../common/createbutton";
import {
  BoardButtonContainer,
  BoardContentTextArea,
  BoardTitleInput,
} from "../BoardCreate/style";
import { BoardContainer } from "../BoardDetail/style";
import BoardFileUpload from "../BoardFileUpload";
import { useBoardUpdate } from "./../../../hooks/board/useBoardUpdate";

const BoardUpdate = () => {
  const { id } = useParams<Params>();
  const { board } = useBoardDetail(id ? parseInt(id) : 0);

  const [title, setTitle] = useState(board?.title);
  const [content, setContent] = useState(board?.content);
  const [fileList, setFileList] = useState<File[]>([]);
  const category_id = useRecoilValue(boardCategoryState);
  const formData = new FormData();
  const navigate = useNavigate();

  const data = {
    title: title,
    content: content,
    category_id: category_id,
    delete_file_urls: [],
  };

  formData.append(
    "boardUpdateRequest",
    new Blob([JSON.stringify(data)], { type: "application/json" })
  );

  const updateMutation = useBoardUpdate(parseInt(id!!), formData);

  const handleUpdateSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    updateMutation.mutate();
    navigate(-1);
  };

  return (
    <BoardContainer>
      <form onSubmit={handleUpdateSubmit}>
        <BoardTitleInput
          style={FONT.SUBTITLE2}
          type="text"
          value={title}
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setTitle(e.currentTarget.value)
          }
        />
        <BoardContentTextArea
          style={FONT.SUBTITLE1}
          value={content}
          onChange={(e: React.FormEvent<HTMLTextAreaElement>) =>
            setContent(e.currentTarget.value)
          }
        />
        <BoardFileUpload formData={formData} />

        <BoardButtonContainer>
          <CreateButton onSubmit={handleUpdateSubmit} />
        </BoardButtonContainer>
      </form>
    </BoardContainer>
  );
};

export default BoardUpdate;
