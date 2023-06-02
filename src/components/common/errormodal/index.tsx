import styled from 'styled-components';
import { useRecoilState } from 'recoil';

import { CharErrorCode, CharErrorMessage } from '../../../constants/error';
import { ButtonBig } from '../buttons/button_big';
import { modalState } from '../../../types/modal';

import FONT from '../../../constants/fonts';
import COLOR from '../../../constants/color';

const ErrorModal = (error: any) => {
  const errorCode = error.code as CharErrorCode;
  const [modal, setModal] = useRecoilState(modalState);

  return (
    <>
      <Top>
        <Img src="/pictogram/warning.png" />
        <div style={FONT.SUBTITLE2}>{CharErrorMessage[errorCode]}</div>
      </Top>
      <ButtonBig
        content="알겠어요"
        color={COLOR.GREEN4}
        onClick={() => setModal(null)}
      />
    </>
  );
};

const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Img = styled.img`
  width: 10rem;
`;

export default ErrorModal;
