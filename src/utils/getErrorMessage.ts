type SignupFormField =
  | "name"
  | "userId"
  | "userPassword"
  | "userPasswordConfirm"
  | "phoneNumber";

type LoginFormField = "userId" | "userPassword";

export function getSignupFormFieldErrorMessage(
  field: SignupFormField,
  errorType: string
) {
  switch (field) {
    case "userId": {
      switch (errorType) {
        case "required":
          return "필수 항목입니다";
        case "duplicated":
          return "이미 등록된 아이디입니다";
        case "etc":
          return "아이디 중복 확인 중 문제가 발생했습니다";
        default:
          throw new Error();
      }
    }
    case "userPassword": {
      switch (errorType) {
        case "required":
          return "필수 항목입니다";
        case "minLength":
          return "8자 이상이어야 합니다";
        case "maxLength":
          return "16자를 초과하였습니다";
        case "pattern":
          return "영문 대/소문자, 숫자, 특수문자를 포함해야 합니다";
        default:
          throw new Error();
      }
    }
    case "userPasswordConfirm": {
      switch (errorType) {
        case "required":
          return "필수 항목입니다";
        case "validate":
          return "비밀번호가 일치하지 않습니다";
        default:
          throw new Error();
      }
    }
    case "name": {
      switch (errorType) {
        case "required":
          return "필수 항목입니다";
        default:
          throw new Error();
      }
    }
    case "phoneNumber": {
      switch (errorType) {
        case "required":
          return "필수 항목입니다";
        case "pattern":
          return "10 ~ 11 자리의 숫자만 입력 가능합니다";
        default:
          throw new Error();
      }
    }

    default:
      throw new Error();
  }
}

export function getLoginFormFieldErrorMessage(
  field: LoginFormField,
  errorType: string
) {
  switch (field) {
    case "userId": {
      switch (errorType) {
        case "required":
          return "아이디를 입력해주세요";
        case "invalid":
          return "아이디와 비밀번호가 일치하지 않습니다";
        case "unknown":
          return "존재하지 않거나 승인되지 않은 회원입니다";
        default:
          throw new Error();
      }
    }
    case "userPassword": {
      switch (errorType) {
        case "required":
          return "비밀번호를 입력해주세요";
        default:
          throw new Error();
      }
    }
    default:
      throw new Error();
  }
}
