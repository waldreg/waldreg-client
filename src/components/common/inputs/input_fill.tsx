import styled from 'styled-components';
import COLOR from '../../../constants/color';
import FONT from '../../../constants/fonts';
import { UseInput } from '../../../interfaces/basic';

export const InputFillThin = (props: UseInput) => {
  return (
    <>
      <Input
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        theme={'thin'}
        style={FONT.SUBTITLE2}
      />
    </>
  );
};

export const InputFillBold = (props: UseInput) => {
  return (
    <>
      <Input
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        theme={'bold'}
        style={FONT.SUBTITLE2}
        autoFocus
      />
    </>
  );
};

const Input = styled.input<{ theme: string }>`
  width: 100%;
  height: ${(props) => (props.theme === 'thin' ? `3rem` : `3.4rem;`)};
  padding: 
  ${(props) =>
    props.theme === 'thin' ? `0.75rem 0.75rem 0.75rem 1rem;` : `1rem;`}
  

  border: 0;
  border-radius: 0.5rem;

  background: ${COLOR.GRAY1};

  font-size: 0.75rem;
`;
