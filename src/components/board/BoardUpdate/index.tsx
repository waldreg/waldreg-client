import { useState } from "react";
import { Params, useParams } from "react-router";
import FONT from "../../../constants/fonts";
import { useBoardDetail } from "../../../hooks/board/useBoardDetail";
import CreateButton from "../../common/createbutton";
import {
  BoardButtonContainer,
  BoardContentTextArea,
  BoardTitleInput,
} from "../BoardCreate/style";
import BoardFileUpload from "../BoardFileUpload";
import { useBoardUpdate } from "./../../../hooks/board/useBoardUpdate";
import Container from "../../common/container";
import BoardListButton from "../BoardListButton";

const BoardUpdate = () => {
  const { id, categoryId } = useParams<Params>();
  const { board } = useBoardDetail(id ? parseInt(id) : 0);

  const files = [...(board?.files ?? []), ...(board?.images ?? [])];

  const [title, setTitle] = useState(board?.title);
  const [content, setContent] = useState(board?.content);
  const formData = new FormData();

  const data = {
    title: title,
    content: content,
    category_id: categoryId,
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
  };

  return (
    <Container
      style={{
        padding: "2rem 1.7rem 1rem",
        margin: "0.6rem 0",
        minWidth: "35rem",
        maxHeight: "40rem",
      }}
    >
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
        <BoardFileUpload
          formData={formData}
          files={files}
          deleteFile={data.delete_file_urls}
          update={true}
        />

        <BoardButtonContainer>
          <BoardListButton />
          <CreateButton onSubmit={handleUpdateSubmit} />
        </BoardButtonContainer>
      </form>
    </Container>
  );
};

export default BoardUpdate;
