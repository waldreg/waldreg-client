import { useContext, useState } from 'react';
import AuthContext from '../../../states/auth-context';
import { useLocation, useNavigate } from 'react-router-dom';
import 'tw-elements';

import { useBoardCategoryList } from '../../../hooks/board/category/useBoardCategoryList';
import useCurUser from '../../../hooks/curuser/useCurUser';
import BoardCategory from '../../board/BoardCategory';

import FONT from '../../../constants/fonts';

import { LogoIcon } from '../../Icons/LogoIcons';
import {
  DoubleLeftIcon,
  DoubleRightIcon,
  HomeIcon,
  CheckRoundIcon,
  BoardIcon,
  CalIcon,
  MedalIcon,
  SettingIcon,
  LogOutIcon,
} from '../../Icons/BasicIcons';
import {
  Wrapper,
  Top,
  Bottom,
  Links,
  Items,
  Item,
  BaseLink,
  Link,
  Text,
  Blank,
  RightIconWrapper,
} from './style';
import { IconWrapper } from '../../character/CharacterList/style';

const NavBar = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
  };

  const { boardCategoryList } = useBoardCategoryList();
  const curUser = useCurUser();

  const [width, setWidth] = useState(true);
  const location = useLocation().pathname;
  const startLocation = location.split('/')[1];

  const navigate = useNavigate();

  return (
    <Wrapper
      className={`text-white ease-in-out duration-200 ${
        width ? 'translate-x-0' : '-translate-x-0'
      }`}
      open={width}
    >
      {width ? (
        <>
          <Top>
            <IconWrapper onClick={() => navigate('/')}>
              <LogoIcon />
            </IconWrapper>
            <IconWrapper onClick={() => setWidth(false)}>
              <DoubleLeftIcon />
            </IconWrapper>
          </Top>
          <Links className="h-full" id="sidenavSecExample">
            <Items className="relative px-1">
              <Item className="relative">
                <Link
                  to="/"
                  className="overflow-hidden text-ellipsis whitespace-nowrap rounded transition duration-300 ease-in-out cursor-pointer"
                  selected={location === '/'}
                >
                  <HomeIcon />
                  <Text style={FONT.SUBTITLE2}>홈</Text>
                </Link>
              </Item>
              {curUser?.character === 'Admin' && (
                <Item className="relative" id="sidenavSecEx2">
                  <BaseLink
                    className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSidenavSecEx2"
                    aria-expanded="false"
                    aria-controls="collapseSidenavSecEx2"
                    selected={startLocation === 'setting'}
                  >
                    <SettingIcon />
                    <Text style={FONT.SUBTITLE2}>설정</Text>
                  </BaseLink>
                  <Items
                    className="relative accordion-collapse collapse"
                    id="collapseSidenavSecEx2"
                    aria-labelledby="sidenavSecEx2"
                    data-bs-parent="#sidenavSecExample"
                  >
                    <Item className="relative">
                      <Link
                        to="/setting/user"
                        className="overflow-hidden text-ellipsis whitespace-nowrap rounded transition duration-300 ease-in-out"
                        selected={location === '/setting/user'}
                      >
                        <Blank />
                        <Text style={FONT.BODY1}>유저 관리</Text>
                      </Link>
                    </Item>
                    <Item className="relative">
                      <Link
                        to="/setting/character"
                        className="overflow-hidden text-ellipsis whitespace-nowrap rounded hover:bg-blue-50 transition duration-300 ease-in-out"
                        selected={location === '/setting/character'}
                      >
                        <Blank />
                        <Text style={FONT.BODY1}>역할 관리</Text>
                      </Link>
                    </Item>
                    <Item className="relative">
                      <Link
                        to="/setting/board"
                        selected={location === '/setting/board'}
                      >
                        <Blank />
                        <Text style={FONT.BODY1}>게시판 관리</Text>
                      </Link>
                    </Item>
                    <Item className="relative">
                      <Link
                        to="/setting/reward"
                        selected={location === '/setting/reward'}
                      >
                        <Blank />
                        <Text style={FONT.BODY1}>상벌점 관리</Text>
                      </Link>
                    </Item>
                  </Items>
                </Item>
              )}
              <Item className="relative" id="sidenavSecEx3">
                <BaseLink
                  className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded transition duration-300 ease-in-out cursor-pointer"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSidenavSecEx3"
                  aria-expanded="false"
                  aria-controls="collapseSidenavSecEx3"
                >
                  <CheckRoundIcon />
                  <Text style={FONT.SUBTITLE2}>출석</Text>
                </BaseLink>
                <Items
                  className="relative accordion-collapse collapse"
                  id="collapseSidenavSecEx3"
                  aria-labelledby="sidenavSecEx3"
                  data-bs-parent="#sidenavSecExample"
                >
                  <Item className="relative">
                    <Link
                      to="/attendance/check"
                      className="overflow-hidden text-ellipsis whitespace-nowrap rounded transition duration-300 ease-in-out"
                      selected={location === '/attendance/check'}
                    >
                      <Blank />
                      <Text style={FONT.BODY1}>출석체크</Text>
                    </Link>
                  </Item>
                  <Item className="relative">
                    <Link
                      to="/"
                      className="overflow-hidden text-ellipsis whitespace-nowrap rounded transition duration-300 ease-in-out"
                    >
                      <Blank />
                      <Text style={FONT.BODY1}>일별출석현황</Text>
                    </Link>
                  </Item>
                  <Item className="relative">
                    <Link
                      to="/"
                      className="overflow-hidden text-ellipsis whitespace-nowrap rounded transition duration-300 ease-in-out"
                    >
                      <Blank />
                      <Text style={FONT.BODY1}>월별출석현황</Text>
                    </Link>
                  </Item>
                </Items>
              </Item>
              <Item className="relative" id="sidenavSecEx4">
                <BaseLink
                  className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded cursor-pointer"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSidenavSecEx4"
                  aria-expanded="false"
                  aria-controls="collapseSidenavSecEx4"
                  selected={startLocation === 'board'}
                >
                  <BoardIcon />
                  <Text style={FONT.SUBTITLE2}>게시판</Text>
                </BaseLink>
                {boardCategoryList && (
                  <BoardCategory boardCategoryList={boardCategoryList} />
                )}
              </Item>

              <li className="relative">
                <Link
                  to="/schedule"
                  className="overflow-hidden text-ellipsis whitespace-nowrap rounded hover: transition duration-300 ease-in-out cursor-pointer"
                  selected={location === '/schedule'}
                >
                  <CalIcon />
                  <Text style={FONT.SUBTITLE2}>일정표</Text>
                </Link>
              </li>
              <li className="relative">
                <Link
                  to="/reward"
                  className="overflow-hidden text-ellipsis whitespace-nowrap rounded hover: transition duration-300 ease-in-out cursor-pointer"
                  selected={location === '/reward'}
                >
                  <MedalIcon />
                  <Text style={FONT.SUBTITLE2}>상벌점</Text>
                </Link>
              </li>
              <li className="relative">
                <Link
                  to="/joiningpool"
                  className="overflow-hidden text-ellipsis whitespace-nowrap rounded hover: transition duration-300 ease-in-out cursor-pointer"
                >
                  <MedalIcon />
                  <Text style={FONT.SUBTITLE2}>가입 승인</Text>
                </Link>
              </li>
            </Items>
            <Bottom>
              {!isLoggedIn && (
                <Link
                  to="/login"
                  className="overflow-hidden text-ellipsis whitespace-nowrap rounded hover: transition duration-300 ease-in-out cursor-pointer"
                >
                  <Text style={FONT.SUBTITLE2}>로그인</Text>
                </Link>
              )}
              {!isLoggedIn && (
                <Link
                  to="/signup"
                  className="overflow-hidden text-ellipsis whitespace-nowrap rounded hover: transition duration-300 ease-in-out cursor-pointer"
                >
                  <Text style={FONT.SUBTITLE2}>회원가입</Text>
                </Link>
              )}
              {isLoggedIn && (
                <Link
                  to="/login"
                  onClick={logoutHandler}
                  className="overflow-hidden text-ellipsis whitespace-nowrap rounded hover: transition duration-300 ease-in-out cursor-pointer"
                >
                  <LogOutIcon />
                  <Text style={FONT.SUBTITLE2}>로그아웃</Text>
                </Link>
              )}
            </Bottom>
          </Links>
        </>
      ) : (
        <RightIconWrapper onClick={() => setWidth(true)}>
          <DoubleRightIcon />
        </RightIconWrapper>
      )}
    </Wrapper>
  );
};

export default NavBar;
