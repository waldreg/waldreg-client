import { memo } from "react";
import { ErrorText } from "./style";
import FONT from "../../../constants/fonts";

interface ErrorMessageProp {
  message: string;
}

const ErrorMessage = memo(({ message }: ErrorMessageProp) => (
  <ErrorText style={FONT.DETAIL1}>{message}</ErrorText>
));

export default ErrorMessage;
