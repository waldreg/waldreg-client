import {
  ConfirmMessage,
  SettingButtonBox,
  SettingCancelButton,
  SettingSaveButton,
  SettingTitle,
  UserInfoContainer,
  UserInfoListContainer,
} from "./style";

import FONT from "../../../constants/fonts";
import Modal from "../../common/modal";
import { User } from "../../../interfaces/user";

const JoiningpoolModal = ({
  setIsOpenModal,
  type,
  checkedList,
}: {
  setIsOpenModal: any;
  type: string;
  checkedList: User[];
}) => {
  return (
    <Modal onClickToggleModal={() => setIsOpenModal(false)} size={"middle"}>
      <SettingTitle style={FONT.HEADING}>가입 {type}</SettingTitle>
      <ConfirmMessage style={FONT.SUBTITLE2} type={type}>
        다음 유저의 가입을 <span>{type}</span>하시겠습니까?
      </ConfirmMessage>
      <UserInfoListContainer>
        {checkedList.map((user) => (
          <UserInfoContainer style={FONT.SUBTITLE2}>
            <span className="name">{user.name}</span>
            <span className="userId">{user.user_id}</span>
          </UserInfoContainer>
        ))}
      </UserInfoListContainer>
      <SettingButtonBox>
        <SettingCancelButton
          style={FONT.SUBTITLE2}
          onClick={() => {
            console.log("hi");
          }}
        >
          취소
        </SettingCancelButton>
        <SettingSaveButton
          style={FONT.SUBTITLE2}
          onClick={() => {
            console.log("hi");
          }}
        >
          확인
        </SettingSaveButton>
      </SettingButtonBox>
    </Modal>
  );
};

export default JoiningpoolModal;
