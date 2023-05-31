import React, { useEffect } from "react";

import { ButtonBig } from "../../common/buttons/button_big";
import COLOR from "../../../constants/color";
import Container from "../../common/container";
import FONT from "../../../constants/fonts";
import { InputFillThin } from "../../common/inputs/input_fill";
import { Title } from "../../common/pagetitle/style";
import { Top } from "./style";
import { UserCheckBox } from "../../common/checkbox/checkbox";
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

  return (
    <Container>
      <Top>
        <Title style={FONT.HEADING}>승인 대기 유저</Title>
        <InputFillThin
          value={value}
          placeholder={"유저 검색하기"}
          onChange={handleChangeInput}
          reset={reset}
        />
        <ButtonBig
          content={"가입 거절"}
          color={checkedList.length ? COLOR.RED2 : COLOR.GRAY2}
          onClick={() => {
            console.log(checkedList);
          }}
        />
        <ButtonBig
          content={"가입 승인"}
          color={checkedList.length ? COLOR.GREEN4 : COLOR.GRAY2}
          onClick={() => {
            console.log(checkedList);
          }}
        />
      </Top>
      <UserCheckBox
        data={searchJoiningpoolUserList || []}
        updateCheckList={updateCheckList}
      />
    </Container>
  );
};

export default JoiningpoolUser;
