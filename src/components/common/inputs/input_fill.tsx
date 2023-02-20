import styled from 'styled-components';
import COLOR from '../../../constants/color';
import { UseInput } from '../../../interfaces/basic';

export const InputFillThin = (props: UseInput) => {
  return (
    <>
      <Input
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        theme={'thin'}
        autoFocus
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
        autoFocus
      />
    </>
  );
};

const Input = styled.input<{ theme: string }>`
  width: 100%;
  padding: 
  ${(props) =>
    props.theme === 'thin' ? `0.75rem 0.75rem 0.75rem 1rem;` : `1rem;`}
  

  border: 0;
  border-radius: 0.5rem;

  background: ${COLOR.GRAY1};

  font-size: 0.75rem;
`;
