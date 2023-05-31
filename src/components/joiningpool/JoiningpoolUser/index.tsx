import Container from "../../common/container";
import { InputFillThin } from "../../common/inputs/input_fill";
import React from "react";
import { UserCheckBox } from "../../common/checkbox/checkbox";
import { useInput } from "../../../hooks/common/useInput";
import useJoiningpoolUserList from "../../../hooks/joiningpool/useJoiningpoolUserList";
import { useUserCheckBox } from "../../../hooks/common/useCheckBox";

const JoiningpoolUser = () => {
  const { value, handleChangeInput, reset } = useInput("");
  const { checkedList, updateCheckList, checkReset } = useUserCheckBox();

  const joiningpoolUserList = useJoiningpoolUserList(1, 50)?.users;
  const searchJoiningpoolUserList =
    value === ""
      ? joiningpoolUserList
      : joiningpoolUserList?.filter((user) =>
          user.name.toLowerCase().includes(value.toLowerCase())
        );

  return (
    <Container>
      <InputFillThin
        value={value}
        placeholder={"유저 검색하기"}
        onChange={handleChangeInput}
        reset={reset}
      />
      <UserCheckBox
        data={searchJoiningpoolUserList || []}
        updateCheckList={updateCheckList}
      />
    </Container>
  );
};

export default JoiningpoolUser;
