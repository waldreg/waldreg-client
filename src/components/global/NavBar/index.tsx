import styled from "styled-components";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

import AuthContext from "../../../states/auth-context";

import COLOR from "../../../constants/color";

import { LogoIcon } from "../../Icons/LogoIcons";
import {
  DoubleLeftIcon,
  HomeIcon,
  CheckRoundIcon,
  BoardIcon,
  CalIcon,
  MedalIcon,
  EyeIcon,
} from "../../Icons/BasicIcons";

const NavBar = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
  };

  return (
    <Wrapper>
      <Top>
        <LogoIcon />
        <DoubleLeftIcon />
      </Top>
      <Links>
        <Link to="/home">
          <HomeIcon />홈
        </Link>
        <BaseLink>
          <CheckRoundIcon />
          설정
        </BaseLink>
        <Link to="/setting/character">
          <Blank />
          역할 관리
        </Link>
        <Link to="/setting/character">
          <Blank />
          역할 관리
        </Link>
        <Link to="/setting/character">
          <Blank />
          역할 관리
        </Link>
        <Link to="/setting/character">
          <Blank />
          역할 관리
        </Link>
        <BaseLink>
          <CheckRoundIcon />
          출석
        </BaseLink>
        <BaseLink>
          <BoardIcon />
          게시판
        </BaseLink>
        <Link to="/board/announcement">
          <Blank />
          공지사항
        </Link>
        <Link to="/board/question">
          <Blank />
          질문게시판
        </Link>
        <Link to="/board/free">
          <Blank />
          자유게시판
        </Link>
        <Link to="/board/bug">
          <Blank />
          버그가 있어요!
        </Link>
        <Link to="/board/changelog">
          <Blank />
          체인지 로그
        </Link>
        <Link to="/schedule">
          <CalIcon />
          일정표
        </Link>
        <Link to="/">
          <MedalIcon />
          상벌점
        </Link>
        <Link to="/">
          <EyeIcon />
          상벌점 조회
        </Link>
        {!isLoggedIn && <Link to="/login">로그인</Link>}
        {!isLoggedIn && <Link to="/signup">회원가입</Link>}
        {isLoggedIn && (
          <Link to="/" onClick={logoutHandler}>
            로그아웃
          </Link>
        )}
      </Links>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-width: 16rem;
  height: 100vh;
  padding: 1.75rem;

  background: ${COLOR.WHITE};
`;

const Top = styled.div`
  padding-bottom: 8vh;

  display: flex;
  justify-content: space-between;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const BaseLink = styled.div`
color: ${COLOR.GRAY3};
padding: 0.8rem 0.5rem;

border-radius: 0.5rem;
display: flex;
align-items: center;
gap: 0.75rem;

&:link {
  transition: 0.5s;
  text-decoration: none;
}
&:hover {
  color: ${COLOR.BLACK};
}
&:active {
  background: ${COLOR.GREEN2}
  position: relative;
}`;

const Link = styled(NavLink)`
  color: ${COLOR.GRAY3};
  padding: 0.8rem 0.5rem;

  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  &:link {
    transition: 0.5s;
    text-decoration: none;
  }
  &:hover {
    color: ${COLOR.BLACK};
  }
  &:active {
    background: ${COLOR.GREEN2}
    position: relative;
  }
`;

const Blank = styled.div`
  width: 20px;
  height: 20px;
`;

export default NavBar;
