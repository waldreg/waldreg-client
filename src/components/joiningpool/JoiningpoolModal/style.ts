import COLOR from "../../../constants/color";
import styled from "styled-components";

export const SettingTitle = styled.h1`
  color: ${COLOR.BLACK};
`;
export const ConfirmMessage = styled.h2<{ type: string }>`
  margin: 2rem 0;
  span {
    color: ${({ type }) => (type === "승인" ? COLOR.GREEN4 : COLOR.RED2)};
  }
`;
export const UserInfoContainer = styled.h3`
  display: flex;
  gap: 0.4rem;

  .name {
    color: ${COLOR.BLACK};
  }

  .userId {
    color: ${COLOR.GRAY3};
  }
`;
export const UserInfoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  overflow: auto;
`;

export const SettingButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  margin: 3rem 0 1rem;
`;

export const SettingCancelButton = styled.button`
  background: ${COLOR.GRAY2};
  color: ${COLOR.WHITE};
  width: 50%;
  padding: 0.7rem 0;
  border-radius: 0.5rem;
  margin-right: 1rem;
`;

export const SettingSaveButton = styled.button`
  background: ${COLOR.GREEN4};
  color: ${COLOR.WHITE};
  width: 50%;
  padding: 0.7rem 0;
  border-radius: 0.5rem;
`;
