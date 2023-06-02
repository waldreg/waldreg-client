import { Params, useNavigate, useParams } from "react-router-dom";
import { useBoardDetail } from "../../../hooks/board/useBoardDetail";
import { useState } from "react";
import { useBoardDelete } from "../../../hooks/board/useBoardDelete";
import { waldregAxios as axios } from "../../../apis/axios";
import { useCommentList } from "../../../hooks/board/comment/useCommentList";
import React from "react";
import useCurUser from "../../../hooks/curuser/useCurUser";
import Container from "../../../components/common/container";
import {
  BoardButton,
  BoardButtonBox,
  BoardCommentCount,
  BoardContent,
  BoardInformation,
  BoardInformationBox,
  BoardTitle,
  BoardTopBox,
} from "./style";
import FONT from "../../../constants/fonts";
import {
  FileDetailBox,
  FileDetailTitle,
  FileListBox,
} from "../../../components/board/BoardFileUpload/style";
import { FileDownLoadIcon } from "../../../components/Icons/BoardIcons";
import BoardCommentCreate from "../../../components/board/BoardCommentCreate";
import BoardCommentList from "../../../components/board/BoardCommentList";
import Modal from "../../../components/common/modal";
import {
  CategoryDeleteContent,
  SettingButtonBox,
  SettingCancelButton,
  SettingSaveButton,
  SettingTitle,
} from "../../Setting/Board/style";

const BoardDetail = () => {
  const navigate = useNavigate();
  const { id, categoryId } = useParams<Params>();
  const { board } = useBoardDetail(parseInt(id!!));
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  const handleUpdateButtonClick = () => {
    navigate(`/board/${categoryId}/update/${id}`);
  };

  const handleIsOpenDeleteModal = () => {
    setIsOpenDeleteModal((prev) => !prev);
  };

  const boardDelete = useBoardDelete(parseInt(id!!));
  const handleDeleteButtonClick = () => {
    boardDelete.mutate();
    navigate(-1);
  };

  async function getBoardDownload(file_id: string): Promise<any> {
    const { data } = await axios.get(`/file/${file_id}`, {
      responseType: "blob",
    });
    return data;
  }
  const handleDownloadButtonClick = async (file: {
    origin: string;
    uuid: string;
  }) => {
    const fileData = await getBoardDownload(file.uuid);
    const downloadUrl = URL.createObjectURL(fileData);

    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = file.origin;
    link.click();

    URL.revokeObjectURL(downloadUrl);
  };

  const { commentLists } = useCommentList(parseInt(id!!), 1, 99);
  const files = board?.files;
  const images = board?.images;

  const replaceValue = board?.content
    ? board.content.split("\n").map((line, i) => (
        <React.Fragment key={i}>
          {line}
          <br />
        </React.Fragment>
      ))
    : null;

  const currentUser = useCurUser();

  return (
    <Container
      height="default"
      style={{
        padding: "2rem 1.7rem 1rem",
        margin: "1.4rem 0",
        minWidth: "35rem",
      }}
    >
      <BoardTitle style={FONT.SUBTITLE2}>{board?.title}</BoardTitle>
      <BoardTopBox>
        <BoardInformationBox>
          <BoardInformation style={FONT.SUBTITLE1}>
            {board?.author && board?.author.name}
          </BoardInformation>
          <BoardInformation style={FONT.SUBTITLE1}>
            작성일 : {board?.created_at && board?.created_at.slice(0, 10)}
          </BoardInformation>
          {board?.created_at &&
            board?.created_at !== board?.last_modified_at && (
              <BoardInformation style={FONT.SUBTITLE1}>
                수정일 :
                {board?.last_modified_at &&
                  board?.last_modified_at.slice(0, 10)}
              </BoardInformation>
            )}
          <BoardInformation style={FONT.SUBTITLE1}>
            조회수 : {board?.views && board?.views}
          </BoardInformation>
        </BoardInformationBox>

        {currentUser &&
          currentUser.name &&
          currentUser.name === board?.author?.name && (
            <BoardButtonBox>
              <BoardButton
                style={FONT.SUBTITLE1}
                onClick={handleUpdateButtonClick}
              >
                수정
              </BoardButton>
              <BoardButton
                style={FONT.SUBTITLE1}
                onClick={() => setIsOpenDeleteModal((prev) => !prev)}
              >
                삭제
              </BoardButton>
            </BoardButtonBox>
          )}
      </BoardTopBox>

      <BoardContent style={FONT.BODY1}>{replaceValue}</BoardContent>

      {(files || images) && (
        <FileListBox>
          {files?.map((file, i) => {
            return (
              <FileDetailBox
                key={i}
                onClick={() => handleDownloadButtonClick(file)}
              >
                <FileDetailTitle style={FONT.SUBTITLE1}>
                  {file.origin}
                </FileDetailTitle>
                <FileDownLoadIcon />
              </FileDetailBox>
            );
          })}
          {images?.map((image, i) => {
            return (
              <FileDetailBox
                key={i}
                onClick={() => handleDownloadButtonClick(image)}
              >
                <FileDetailTitle style={FONT.SUBTITLE1}>
                  {image.origin}
                </FileDetailTitle>
                <FileDownLoadIcon />
              </FileDetailBox>
            );
          })}
        </FileListBox>
      )}

      <BoardCommentCount style={FONT.SUBTITLE2}>
        {commentLists?.max_idx}개의 댓글
      </BoardCommentCount>
      <BoardCommentCreate />
      <BoardCommentList />

      {isOpenDeleteModal && (
        <Modal onClickToggleModal={handleIsOpenDeleteModal} size={"small"}>
          <SettingTitle style={FONT.HEADING}>게시글 삭제</SettingTitle>
          <CategoryDeleteContent style={FONT.SUBTITLE2}>
            게시글을 삭제하시겠습니까?
          </CategoryDeleteContent>
          <SettingButtonBox>
            <SettingCancelButton
              style={FONT.SUBTITLE2}
              onClick={handleIsOpenDeleteModal}
            >
              취소
            </SettingCancelButton>
            <SettingSaveButton
              style={FONT.SUBTITLE2}
              onClick={() => {
                handleDeleteButtonClick();
                handleIsOpenDeleteModal();
              }}
            >
              확인
            </SettingSaveButton>
          </SettingButtonBox>
        </Modal>
      )}
    </Container>
  );
};

export default BoardDetail;
