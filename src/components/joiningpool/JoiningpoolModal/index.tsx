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
import useApproveJoining from "../../../hooks/joiningpool/useApproveJoining";
import useDiscardJoining from "../../../hooks/joiningpool/useDiscardJoining";

const JoiningpoolModal = ({
  setIsOpenModal,
  type,
  checkedList,
}: {
  setIsOpenModal: any;
  type: string;
  checkedList: User[];
}) => {
  const { mutate: apporveMutate } = useApproveJoining();
  const { mutate: discardMutate } = useDiscardJoining();

  const handleJoining = (type: string) => {
    checkedList.forEach((user) => {
      type === "승인"
        ? apporveMutate({ id: Date.now(), user_id: user.user_id })
        : discardMutate({ id: Date.now(), user_id: user.user_id });
    });
  };

  return (
    <Modal onClickToggleModal={() => setIsOpenModal(false)} size={"middle"}>
      <SettingTitle style={FONT.HEADING}>가입 {type}</SettingTitle>
      <ConfirmMessage style={FONT.SUBTITLE2} type={type}>
        다음 유저의 가입을 <span>{type}</span>하시겠습니까?
      </ConfirmMessage>
      <UserInfoListContainer>
        {checkedList.map((user) => (
          <UserInfoContainer key={user.user_id} style={FONT.SUBTITLE2}>
            <span className="name">{user.name}</span>
            <span className="userId">{user.user_id}</span>
          </UserInfoContainer>
        ))}
      </UserInfoListContainer>
      <SettingButtonBox>
        <SettingCancelButton
          style={FONT.SUBTITLE2}
          onClick={() => setIsOpenModal(false)}
        >
          취소
        </SettingCancelButton>
        <SettingSaveButton
          modalType={type}
          style={FONT.SUBTITLE2}
          onClick={() => {
            handleJoining(type);
            setIsOpenModal(false);
          }}
        >
          확인
        </SettingSaveButton>
      </SettingButtonBox>
    </Modal>
  );
};

export default JoiningpoolModal;
