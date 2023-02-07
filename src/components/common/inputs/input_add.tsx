import styled from 'styled-components';
import COLOR from '../../../constants/color';
import { IUseInput } from '../../../interfaces/basic';

export const InputAdd = (props: IUseInput) => {
  return (
    <>
      <Input
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        autoFocus
      />
      <IconWrapper onClick={props.reset}>x</IconWrapper>
    </>
  );
};

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 0.75rem 0.75rem 1rem;

  border: 0;
  border-radius: 0.5rem;

  background: ${COLOR.GRAY1};

  font-size: 0.75rem;
`;

const IconWrapper = styled.div`
  position: absolute;
  right: 2.5rem;

  display: flex;
  justify-content: center;
`;
