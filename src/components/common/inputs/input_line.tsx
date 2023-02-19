import styled from 'styled-components';

import { UseInput } from '../../../interfaces/basic';

import COLOR from '../../../constants/color';
import FONT from '../../../constants/fonts';

export const InputLine = (props: UseInput) => {
  return (
    <>
      <Input
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        autoFocus
        style={FONT.SUBTITLE1}
      />
    </>
  );
};

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;

  border-bottom: 2px solid ${COLOR.GRAY0};

  color: ${COLOR.GRAY5};
`;
