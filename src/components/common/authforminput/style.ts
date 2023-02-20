import styled from "styled-components";
import COLOR from "../../../constants/color";

const HelpText = styled.p`
  display: none;
  color: ${COLOR.GREEN4};
`;

const Input = styled.input<{ hasError: boolean | undefined }>`
  width: 100%;
  padding: 0.75rem 0.75rem 0.75rem 1rem;

  border: 0;
  border-radius: 0.5rem;

  background: ${COLOR.GRAY1};

  font-size: 0.75rem;

  &:focus {
    border: ${(props) =>
      props.hasError
        ? `solid ${COLOR.RED2} 0.1rem; background:${COLOR.RED1}`
        : `solid ${COLOR.GREEN4} 0.1rem; background:${COLOR.GREEN1}`};
    ~ ${HelpText} {
      display: block;
    }
  }
`;

export { Input, HelpText };
