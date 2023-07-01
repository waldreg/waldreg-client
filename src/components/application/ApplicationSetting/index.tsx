import { Item, Top } from "../../character/CharacterList/style";

import ApplicationFileUpload from "../ApplicationFileUpload";
import COLOR from "../../../constants/color";
import Container from "../../common/container";
import FONT from "../../../constants/fonts";
import { Title } from "../../common/pagetitle/style";
import styled from "styled-components";
import { useState } from "react";

const ApplicationSetting = () => {
  const perThemeList = ["로고"];
  const [perTheme, setPerTheme] = useState(perThemeList[0]);

  return (
    <Container width="32vw">
      <Content>
        <Top>
          <Title style={FONT.HEADING}>서버 관리</Title>
        </Top>
        <PerThemeList style={FONT.SUBTITLE2}>
          {perThemeList.map((theme) => (
            <Item
              key={theme}
              onClick={() => setPerTheme(theme)}
              selected={theme === perTheme}
            >
              {theme}
            </Item>
          ))}
        </PerThemeList>
        <SubtitleWrapper>
          <Title style={FONT.SUBTITLE2}>로고 등록</Title>
          <Subtitle style={FONT.SUBTITLE1}>
            png 또는 svg 형식의 이미지를 등록해주세요.
          </Subtitle>
        </SubtitleWrapper>
        <ApplicationFileUpload />
      </Content>
    </Container>
  );
};

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  overflow: auto;
`;

const PerThemeList = styled.div`
  max-width: 100%;
  overflow-x: auto;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }

  display: flex;
  gap: 1rem;
`;

const Subtitle = styled.h2`
  color: ${COLOR.GRAY2};
`;

const SubtitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

export default ApplicationSetting;
