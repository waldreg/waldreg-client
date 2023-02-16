import { useState } from "react";
import { Params, useNavigate, useParams } from "react-router";
import { useRecoilValue } from "recoil";
import FONT from "../../../constants/fonts";
import { useBoardDetail } from "../../../hooks/board/useBoardDetail";
import { boardCategoryState } from "../../../states/board";
import { PencilWhiteIcon } from "../../Icons/BoardIcons";
import {
  BoardButtonContainer,
  BoardContentTextArea,
  BoardCreateButton,
  BoardFileInput,
  BoardTitleInput,
} from "../BoardCreate/style";
import { BoardContainer } from "../BoardDetail/style";
import { useBoardUpdate } from "./../../../hooks/board/useBoardUpdate";

const BoardUpdate = () => {
  const { id } = useParams<Params>();
  const { board } = useBoardDetail(id ? parseInt(id) : 0);

  const [title, setTitle] = useState(board?.title);
  const [content, setContent] = useState(board?.content);
  const [file, setFile] = useState<File | null>(null);
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
        <BoardFileInput
          style={FONT.SUBTITLE2}
          type="file"
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            if (e.currentTarget.files) {
              setFile(e.currentTarget.files[0]);
            }
          }}
        />
        <BoardButtonContainer>
          <BoardCreateButton
            onSubmit={handleUpdateSubmit}
            style={FONT.SUBTITLE1}
          >
            <PencilWhiteIcon />
            작성
          </BoardCreateButton>
        </BoardButtonContainer>
      </form>
    </BoardContainer>
  );
};

export default BoardUpdate;
