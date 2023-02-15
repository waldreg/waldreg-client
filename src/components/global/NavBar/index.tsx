import styled from 'styled-components';
import { useContext, useState } from 'react';
import AuthContext from '../../../states/auth-context';
import { NavLink, useLocation } from 'react-router-dom';
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
  SettingIcon,
  LogOutIcon,
} from '../../Icons/BasicIcons';

const NavBar = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
  };

  const { boardCategoryList } = useBoardCategoryList();

  const [width, setWidth] = useState(true);
  const location = useLocation().pathname;

  return width ? (
    <Wrapper>
      <Top onClick={() => setWidth(false)}>
        <LogoIcon />
        <DoubleLeftIcon />
      </Top>
      <Links>
        <Items className="relative px-1">
          <Item className="relative" selected={location === '/home'}>
            <Link
              to="/home"
              className="overflow-hidden text-ellipsis whitespace-nowrap rounded transition duration-300 ease-in-out cursor-pointer"
              data-mdb-ripple="true"
              data-mdb-ripple-color={COLOR.GREEN4}
            >
              <HomeIcon />
              <Text style={FONT.SUBTITLE1}>홈</Text>
            </Link>
          </Item>
          <li className="relative" id="SideNav1">
            <BaseLink
              className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer"
              data-mdb-ripple="true"
              data-mdb-ripple-color={COLOR.GREEN4}
              data-bs-toggle="collapse"
              data-bs-target="#collapseSideNav1"
              aria-expanded="false"
              aria-controls="collapseSideNav1"
            >
              <SettingIcon />
              <Text style={FONT.SUBTITLE1}>설정</Text>
            </BaseLink>
            <ul
              className="relative accordion-collapse collapse"
              id="collapseSideNav1"
              aria-labelledby="SideNav1"
              data-bs-parent="#sidenavSecExample"
            >
              <Item
                className="relative"
                selected={location === '/setting/user'}
              >
                <Link
                  to="/setting/user"
                  className="overflow-hidden text-ellipsis whitespace-nowrap rounded hover:bg-blue-50 transition duration-300 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color={COLOR.GREEN4}
                >
                  <Blank />
                  <Text style={FONT.BODY1}>유저 관리</Text>
                </Link>
              </Item>
              <Item
                className="relative"
                selected={location === '/setting/character'}
              >
                <Link
                  to="/setting/character"
                  className="overflow-hidden text-ellipsis whitespace-nowrap rounded hover:bg-blue-50 transition duration-300 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color={COLOR.GREEN4}
                >
                  <Blank />
                  <Text style={FONT.BODY1}>역할 관리</Text>
                </Link>
              </Item>
              <Item
                className="relative"
                selected={location === '/setting/board'}
              >
                <Link to="/setting/board">
                  <Blank />
                  <Text style={FONT.BODY1}>게시판 관리</Text>
                </Link>
              </Item>
            </ul>
          </li>
          <li className="relative" id="SideNav2">
            <BaseLink
              className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer"
              data-mdb-ripple="true"
              data-mdb-ripple-color={COLOR.GREEN4}
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
              <Item className="relative">
                <Link
                  to="/setting/user"
                  className="overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="primary"
                >
                  <Blank />
                  <Text style={FONT.BODY1}>일별출석현황</Text>
                </Link>
              </Item>
              <Item className="relative">
                <Link
                  to="/setting/character"
                  className="overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="primary"
                >
                  <Blank />
                  <Text style={FONT.BODY1}>월별출석현황</Text>
                </Link>
              </Item>
            </ul>
          </li>
          <li className="relative" id="SideNav3">
            <BaseLink
              className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded cursor-pointer"
              data-mdb-ripple="true"
              data-mdb-ripple-color={COLOR.GREEN4}
              data-bs-toggle="collapse"
              data-bs-target="#collapseSideNav3"
              aria-expanded="false"
              aria-controls="collapseSideNav3"
            >
              <BoardIcon />
              <Text style={FONT.SUBTITLE1}>게시판</Text>
            </BaseLink>
            <Items
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
            </Items>
          </li>

          <li className="relative">
            <Link
              to="/schedule"
              className="overflow-hidden text-ellipsis whitespace-nowrap rounded hover: transition duration-300 ease-in-out cursor-pointer"
              data-mdb-ripple="true"
              data-mdb-ripple-color={COLOR.GREEN4}
            >
              <CalIcon />
              <Text style={FONT.SUBTITLE1}>일정표</Text>
            </Link>
          </li>
          <li className="relative">
            <Link
              to="/"
              className="overflow-hidden text-ellipsis whitespace-nowrap rounded hover: transition duration-300 ease-in-out cursor-pointer"
            >
              <MedalIcon />
              <Text style={FONT.SUBTITLE1}>상벌점</Text>
            </Link>
          </li>
        </Items>
        <Bottom>
          {!isLoggedIn && (
            <Link
              to="/login"
              className="overflow-hidden text-ellipsis whitespace-nowrap rounded hover: transition duration-300 ease-in-out cursor-pointer"
            >
              <Text style={FONT.SUBTITLE1}>로그인</Text>
            </Link>
          )}
          {!isLoggedIn && (
            <Link
              to="/signup"
              className="overflow-hidden text-ellipsis whitespace-nowrap rounded hover: transition duration-300 ease-in-out cursor-pointer"
            >
              <Text style={FONT.SUBTITLE1}>회원가입</Text>
            </Link>
          )}
          {isLoggedIn && (
            <Link
              to="/"
              onClick={logoutHandler}
              className="overflow-hidden text-ellipsis whitespace-nowrap rounded hover: transition duration-300 ease-in-out cursor-pointer"
            >
              <LogOutIcon />
              <Text style={FONT.SUBTITLE1}>로그아웃</Text>
            </Link>
          )}
        </Bottom>
      </Links>
    </Wrapper>
  ) : (
    <div onClick={() => setWidth(true)}>열기</div>
  );
};

const Wrapper = styled.div`
  min-width: 16rem;
  height: 100vh;
  padding: 1.5rem;

  background: ${COLOR.WHITE};
`;

const Top = styled.div`
  padding-bottom: 8vh;

  display: flex;
  justify-content: space-between;
`;

const Bottom = styled.div``;

const Links = styled.div`
  width: 100%;
  height: 80vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Items = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const Item = styled.li<{ selected?: boolean }>`
  border-radius: 0.5rem;
  background: ${(props) => (props.selected ? COLOR.GREEN2 : COLOR.WHITE)};
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
    color: ${COLOR.BLACK} !important;
  }
`;

const Link = styled(NavLink)`
  color: ${COLOR.GRAY3} !important;
  padding: 0.8rem 0.5rem;

  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  &:hover {
    background: ${COLOR.GREEN2};
    color: ${COLOR.BLACK} !important;
  }
`;

const Text = styled.div`
  width: 100%;
`;

const Blank = styled.div`
  width: 20px;
  height: 20px;
`;

export default NavBar;
