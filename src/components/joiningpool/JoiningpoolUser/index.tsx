import { ButtonContainer, CheckBox, Contents, Description, Top } from "./style";
import { useEffect, useState } from "react";

import { ButtonBig } from "../../common/buttons/button_big";
import COLOR from "../../../constants/color";
import Container from "../../common/container";
import FONT from "../../../constants/fonts";
import { InputFillThin } from "../../common/inputs/input_fill";
import JoiningpoolModal from "../JoiningpoolModal";
import { JoiningpoolUserCheckBox } from "../../common/checkbox/checkbox";
import { Title } from "../../common/pagetitle/style";
import { useInput } from "../../../hooks/common/useInput";
import { useJoiningpoolUserCheckBox } from "../../../hooks/common/useCheckBox";
import useJoiningpoolUserList from "../../../hooks/joiningpool/useJoiningpoolUserList";

const JoiningpoolUser = () => {
  const { value, handleChangeInput, reset } = useInput("");
  const { checkedList, updateCheckList, checkReset } =
    useJoiningpoolUserCheckBox();

  const joiningpoolUserList = useJoiningpoolUserList(1, 50)?.users;

  const searchJoiningpoolUserList =
    value === ""
      ? joiningpoolUserList
      : joiningpoolUserList?.filter((user) =>
          user.name.toLowerCase().includes(value.toLowerCase())
        );

  useEffect(() => {
    return () => {
      checkReset();
    };
  }, [value]);

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalType, setModalType] = useState("");

  return (
    <Container>
      <Top>
        <Title style={FONT.HEADING}>승인 대기 유저</Title>
        {isOpenModal && (
          <JoiningpoolModal
            setIsOpenModal={setIsOpenModal}
            type={modalType}
            checkedList={checkedList}
            checkReset={checkReset}
          />
        )}
        <InputFillThin
          value={value}
          placeholder={"유저 검색하기"}
          onChange={handleChangeInput}
          reset={reset}
        />
        <ButtonContainer>
          <ButtonBig
            content={"가입 거절"}
            color={checkedList.length ? COLOR.RED2 : COLOR.GRAY2}
            onClick={() => {
              if (checkedList.length) {
                setModalType("거절");
                setIsOpenModal(!isOpenModal);
              }
            }}
          />
          <ButtonBig
            content={"가입 승인"}
            color={checkedList.length ? COLOR.GREEN4 : COLOR.GRAY2}
            onClick={() => {
              if (checkedList.length) {
                setModalType("승인");
                setIsOpenModal(!isOpenModal);
              }
            }}
          />
        </ButtonContainer>
      </Top>
      <Contents>
        {searchJoiningpoolUserList ? (
          <JoiningpoolUserCheckBox
            data={searchJoiningpoolUserList || []}
            updateCheckList={updateCheckList}
          />
        ) : (
          <Description style={FONT.SUBTITLE3}>
            승인 대기중인 유저가 존재하지 않습니다.
          </Description>
        )}
      </Contents>
    </Container>
  );
};

export default JoiningpoolUser;
