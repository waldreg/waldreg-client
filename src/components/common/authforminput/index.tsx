import { forwardRef, memo } from "react";
import FONT from "../../../constants/fonts";
import { Input, HelpText } from "./style";

interface AuthFormInputProps {
  placeholder: string;
  helpText?: string;
  hasError?: boolean;
  [key: string]: any;
}

const AuthFormInput = memo(
  forwardRef<HTMLInputElement, AuthFormInputProps>(
    ({ helpText, hasError, ...others }, ref) => (
      <>
        <Input ref={ref} hasError={hasError} {...others} />
        {helpText && <HelpText style={FONT.DETAIL1}>{helpText}</HelpText>}
      </>
    )
  )
);

export default AuthFormInput;
