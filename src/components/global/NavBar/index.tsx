import styled from 'styled-components';
import { useContext, useState } from 'react';
import AuthContext from '../../../states/auth-context';
import { NavLink } from 'react-router-dom';
import 'tw-elements';

import { useBoardCategoryList } from '../../../hooks/board/useBoardCategoryList';
import BoardCategory from '../../board/BoardCategory';

import COLOR from '../../../constants/color';
import FONT from '../../../constants/fonts';

import { LogoIcon } from '../../Icons/LogoIcons';
import {
  DoubleLeftIcon,
  HomeIcon,
  CheckRoundIcon,
  BoardIcon,
  CalIcon,
  MedalIcon,
  EyeIcon,
} from '../../Icons/BasicIcons';

const NavBar = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
  };

  const { boardCategoryList } = useBoardCategoryList();

  const [width, setWidth] = useState(true);

  return width ? (
    <Wrapper>
      <Top onClick={() => setWidth(false)}>
        <LogoIcon />
        <DoubleLeftIcon />
      </Top>
      <Links>
        <ul className="relative px-1">
          <li className="relative">
            <Link
              to="/home"
              className="overflow-hidden text-ellipsis whitespace-nowrap rounded hover: hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer"
              data-mdb-ripple="true"
              data-mdb-ripple-color="primary"
            >
              <HomeIcon />
              <Text style={FONT.SUBTITLE1}>홈</Text>
            </Link>
          </li>
          <li className="relative" id="SideNav1">
            <BaseLink
              className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer"
              data-mdb-ripple="true"
              data-mdb-ripple-color="primary"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSideNav1"
              aria-expanded="false"
              aria-controls="collapseSideNav1"
            >
              <CheckRoundIcon />
              <Text style={FONT.SUBTITLE1}>설정</Text>
            </BaseLink>
            <ul
              className="relative accordion-collapse collapse"
              id="collapseSideNav1"
              aria-labelledby="SideNav1"
              data-bs-parent="#sidenavSecExample"
            >
              <li className="relative">
                <Link
                  to="/setting/user"
                  className="overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="primary"
                >
                  <Blank />
                  <Text style={FONT.BODY1}>유저 관리</Text>
                </Link>
              </li>
              <li className="relative">
                <Link
                  to="/setting/character"
                  className="overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="primary"
                >
                  <Blank />
                  <Text style={FONT.BODY1}>역할 관리</Text>
                </Link>
              </li>
              <li className="relative">
                <Link to="/setting/board">
                  <Blank />
                  게시판 관리
                </Link>
              </li>
            </ul>
          </li>
          <li className="relative" id="SideNav2">
            <BaseLink
              className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer"
              data-mdb-ripple="true"
              data-mdb-ripple-color="primary"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSideNav2"
              aria-expanded="false"
              aria-controls="collapseSideNav2"
            >
              <CheckRoundIcon />
              <Text style={FONT.SUBTITLE1}>출석</Text>
            </BaseLink>
            <ul
              className="relative accordion-collapse collapse"
              id="collapseSideNav2"
              aria-labelledby="SideNav2"
              data-bs-parent="#sidenavSecExample"
            >
              <li className="relative">
                <Link
                  to="/setting/user"
                  className="overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="primary"
                >
                  <Blank />
                  <Text style={FONT.BODY1}>일별출석현황</Text>
                </Link>
              </li>
              <li className="relative">
                <Link
                  to="/setting/character"
                  className="overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="primary"
                >
                  <Blank />
                  <Text style={FONT.BODY1}>월별출석현황</Text>
                </Link>
              </li>
            </ul>
          </li>
          <li className="relative" id="SideNav3">
            <BaseLink
              className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded cursor-pointer"
              data-mdb-ripple="true"
              data-mdb-ripple-color="primary"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSideNav3"
              aria-expanded="false"
              aria-controls="collapseSideNav3"
            >
              <BoardIcon />
              <Text style={FONT.SUBTITLE1}>게시판</Text>
            </BaseLink>
            <ul
              className="relative accordion-collapse collapse"
              id="collapseSideNav3"
              aria-labelledby="SideNav3"
              data-bs-parent="#sidenavSecExample"
            >
              <li className="relative">
                <Link to="/board">
                  <Blank />
                  {boardCategoryList && (
                    <BoardCategory boardCategoryList={boardCategoryList} />
                  )}
                </Link>
              </li>
            </ul>
          </li>

          <li className="relative">
            <Link
              to="/schedule"
              className="overflow-hidden text-ellipsis whitespace-nowrap rounded hover: transition duration-300 ease-in-out cursor-pointer"
              data-mdb-ripple="true"
              data-mdb-ripple-color="primary"
            >
              <CalIcon />
              일정표
            </Link>
          </li>
          <li className="relative">
            <Link
              to="/"
              className="overflow-hidden text-ellipsis whitespace-nowrap rounded hover: transition duration-300 ease-in-out cursor-pointer"
            >
              <MedalIcon />
              상벌점
            </Link>
          </li>
        </ul>
        <ul className="relative px-2">
          {!isLoggedIn && (
            <li>
              <Link to="/login">로그인</Link>
            </li>
          )}
          {!isLoggedIn && (
            <li>
              <Link to="/signup">회원가입</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <Link to="/" onClick={logoutHandler}>
                로그아웃
              </Link>
            </li>
          )}
        </ul>
      </Links>
    </Wrapper>
  ) : (
    <div onClick={() => setWidth(true)}>열기</div>
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
  gap: 40vh;
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
    background: ${COLOR.GREEN2};
    color: ${COLOR.BLACK};
  }
  &:active {
    background: ${COLOR.GREEN2};
  }
`;

const Link = styled(NavLink)`
  color: ${COLOR.GRAY3};
  padding: 0.8rem 0.5rem;

  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  &:hover {
    background: ${COLOR.GREEN2};
    color: ${COLOR.BLACK};
  }

  &:active {
    background: ${COLOR.GREEN2};
  }
`;

const Text = styled.div``;

const Blank = styled.div`
  width: 20px;
  height: 20px;
`;

export default NavBar;
