import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import 'tw-elements';

import COLOR from '../../../constants/color';

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
import FONT from '../../../constants/fonts';

const NavBar = () => {
  return (
    <Wrapper className="absolute">
      <Top>
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
        </ul>
      </Links>
    </Wrapper>
    // <Wrapper>
    //   <Links>
    //     <Link to="/home">
    //       <HomeIcon />홈
    //     </Link>
    //     <BaseLink>
    //       <CheckRoundIcon />
    //       설정
    //     </BaseLink>
    //     <Link to="/setting/user">
    //       <Blank />
    //       유저 관리
    //     </Link>
    //     <Link to="/setting/character">
    //       <Blank />
    //       역할 관리
    //     </Link>
    //     <Link to="/setting/character">
    //       <Blank />
    //       역할 관리
    //     </Link>
    //     <Link to="/setting/character">
    //       <Blank />
    //       역할 관리
    //     </Link>
    //     <BaseLink>
    //       <CheckRoundIcon />
    //       출석
    //     </BaseLink>
    //     <BaseLink>
    //       <BoardIcon />
    //       게시판
    //     </BaseLink>
    //     <Link to="/board/announcement">
    //       <Blank />
    //       공지사항
    //     </Link>
    //     <Link to="/board/question">
    //       <Blank />
    //       질문게시판
    //     </Link>
    //     <Link to="/board/free">
    //       <Blank />
    //       자유게시판
    //     </Link>
    //     <Link to="/board/bug">
    //       <Blank />
    //       버그가 있어요!
    //     </Link>
    //     <Link to="/board/changelog">
    //       <Blank />
    //       체인지 로그
    //     </Link>
    //     <Link to="/schedule">
    //       <CalIcon />
    //       일정표
    //     </Link>
    //     <Link to="/">
    //       <MedalIcon />
    //       상벌점
    //     </Link>
    //     <Link to="/">
    //       <EyeIcon />
    //       상벌점 조회
    //     </Link>
    //   </Links>
    // </Wrapper>
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

  &:hover {
    background: ${COLOR.GREEN2}
    color: ${COLOR.BLACK};
  }

  &:active {
    background: ${COLOR.GREEN2}
  }
`;

const Text = styled.div``;

const Blank = styled.div`
  width: 20px;
  height: 20px;
`;

export default NavBar;
