import COLOR from "../../../constants/color";
import FONT from "../../../constants/fonts";
import { InputFillThin } from "../../common/inputs/input_fill";
import JoiningPoolUserInfo from "../JoiningPoolUserInfo";
import { User } from "../../../interfaces/user";
import { authAPI } from "../../../apis/authAPI";
import styled from "styled-components";
import useAllUserList from "../../../hooks/user/useAllUserList";
import { useInput } from "../../../hooks/common/useInput";
import { useState } from "react";
import useUserList from "../../../hooks/joiningpool/useJoiningpoolUserList";

const JoiningPoolUserList = ({ handleClickChangeUser }: any) => {
  const [page, setPage] = useState<number>(1);
  const allUserList = useAllUserList(1, 100)?.users;
  const userList = useUserList(page, page + 7)?.users;
  const max = useUserList(page, page + 7)?.max_idx || 1;
  const numPages = Math.ceil(max / 8);
  const pageNums = Array(numPages)
    .fill(0)
    .map((v, i) => i + 1);

  const { value, handleChangeInput, reset } = useInput("");

  const filterList =
    value === ""
      ? userList
      : allUserList?.filter((user) =>
          user.name.toLowerCase().includes(value.toLowerCase())
        );

  return (
    <Container>
      <Top>
        <Title style={FONT.HEADING}>승인 대기 유저 목록</Title>
        <InputFillThin
          value={value}
          placeholder={"유저 이름"}
          onChange={handleChangeInput}
          reset={reset}
        />
      </Top>
      <UserItems>
        {filterList?.length === 0 || filterList === undefined ? (
          <div>검색된 유저가 없습니다</div>
        ) : (
          filterList.map((user: User) => (
            <UserItem
              key={user.id}
              onClick={() => {
                authAPI.join(user.user_id);
                filterList.splice(user.id, 1);
              }}
            >
              <JoiningPoolUserInfo user={user} size={"small"} />
            </UserItem>
          ))
        )}
      </UserItems>
      <PageNav>
        {pageNums.map((num) => (
          <PageBtn
            key={num}
            onClick={(e: any) => {
              setPage(Number(e.target.innerText) * 8 - 7);
            }}
            style={FONT.DETAIL1}
            selected={num * 8 - 7 === page}
          >
            {num}
          </PageBtn>
        ))}
      </PageNav>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: ${COLOR.WHITE};

  border-radius: 1rem;
  padding: 2rem;

  display: flex;
  flex-direction: column;

  gap: 1.6rem;
`;

const Title = styled.div`
  min-width: max-content;
  width: 140%;
  white-space: nowrap;
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const UserItems = styled.div`
  width: 100%;
  height: 48rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  overflow: hidden;
`;

const UserItem = styled.div`
  width: 100%;

  cursor: pointer;
`;

const PageNav = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`;

const PageBtn = styled.button<{ selected: boolean }>`
  width: 30px;
  height: 30px;

  border-radius: 0.5rem;
  color: ${(props) => (props.selected ? `${COLOR.GREEN4}` : `${COLOR.GRAY4}`)};
  background: ${(props) =>
    props.selected ? `${COLOR.GREEN1}` : `${COLOR.GRAY0}`};
`;

export default JoiningPoolUserList;
