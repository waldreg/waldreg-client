import {
  Button,
  Container,
  Field,
  Fields,
  Form,
  Label,
} from "../../login/LoginForm/style";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

import AuthFormInput from "../../../common/authforminput";
import ErrorMessage from "../../../common/errormessage";
import FONT from "../../../../constants/fonts";
import { REGEX } from "../../../../utils/regex";
import { authAPI } from "../../../../apis/authAPI";
import { getSignupFormFieldErrorMessage } from "../../../../utils/getErrorMessage";
import { useNavigate } from "react-router-dom";

interface SignupForm {
  name: string;
  userId: string;
  userPassword: string;
  userPasswordConfirm: string;
  phoneNumber: string;
}

const SignupForm = () => {
  const navigate = useNavigate();
  const {
    control,
    formState: { isSubmitted, errors },
    watch,
    handleSubmit,
    setError,
  } = useForm<SignupForm>({
    defaultValues: {
      name: "",
      userId: "",
      userPassword: "",
      userPasswordConfirm: "",
      phoneNumber: "",
    },
  });
  const userPassword = watch("userPassword");

  const onSubmit: SubmitHandler<SignupForm> = async ({
    name,
    userId,
    userPassword,
    phoneNumber,
  }) => {
    const newUser = {
      name: name,
      user_id: userId,
      user_password: userPassword,
      phone_number: phoneNumber,
    };
    try {
      await authAPI.signup(newUser);
      navigate("/login");
    } catch (e: any) {
      setError(
        "userId",
        {
          type:
            e.response.data.code === "USER-400"
              ? "duplicated"
              : e.response.data.code,
        },
        { shouldFocus: true }
      );
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Fields>
          <Field>
            <Label style={FONT.SUBTITLE2}>
              <h4>아이디</h4>
            </Label>
            <Controller
              control={control}
              name="userId"
              rules={{
                required: true,
                maxLength: 50,
              }}
              render={({ field }) => (
                <AuthFormInput
                  style={FONT.SUBTITLE1}
                  type="string"
                  placeholder="아이디를 입력하세요."
                  hasError={!!errors.userId}
                  {...field}
                />
              )}
            />
            {errors.userId && (
              <ErrorMessage
                message={getSignupFormFieldErrorMessage(
                  "userId",
                  errors.userId.type
                )}
              />
            )}
          </Field>
          <Field>
            <Label style={FONT.SUBTITLE2}>
              <h4>비밀번호</h4>
            </Label>
            <Controller
              control={control}
              name="userPassword"
              rules={{
                required: true,
                minLength: 8,
                maxLength: 16,
                pattern: REGEX.password,
              }}
              render={({ field }) => (
                <AuthFormInput
                  style={FONT.SUBTITLE1}
                  type="password"
                  placeholder="비밀번호를 입력하세요."
                  helpText={
                    !isSubmitted && "8~16자의 영문 대/소문자+숫자+특수문자"
                  }
                  hasError={!!errors.userPassword}
                  {...field}
                />
              )}
            />
            {errors.userPassword && (
              <ErrorMessage
                message={getSignupFormFieldErrorMessage(
                  "userPassword",
                  errors.userPassword.type
                )}
              />
            )}
          </Field>
          <Field>
            <Label style={FONT.SUBTITLE2}>
              <h4>비밀번호 확인</h4>
            </Label>
            <Controller
              control={control}
              name="userPasswordConfirm"
              rules={{
                required: true,
                validate: (userPasswordConfirm) =>
                  userPasswordConfirm === userPassword,
              }}
              render={({ field }) => (
                <AuthFormInput
                  style={FONT.SUBTITLE1}
                  type="password"
                  placeholder="비밀번호를 한 번 더 입력하세요."
                  hasError={!!errors.userPasswordConfirm}
                  {...field}
                />
              )}
            />
            {errors.userPasswordConfirm && (
              <ErrorMessage
                message={getSignupFormFieldErrorMessage(
                  "userPasswordConfirm",
                  errors.userPasswordConfirm.type
                )}
              />
            )}
          </Field>
          <Field>
            <Label style={FONT.SUBTITLE2}>
              <h4>이름</h4>
            </Label>
            <Controller
              control={control}
              name="name"
              rules={{
                required: true,
                maxLength: 50,
              }}
              render={({ field }) => (
                <AuthFormInput
                  style={FONT.SUBTITLE1}
                  type="string"
                  placeholder="이름을 입력하세요."
                  hasError={!!errors.name}
                  {...field}
                />
              )}
            />
            {errors.name && (
              <ErrorMessage
                message={getSignupFormFieldErrorMessage(
                  "name",
                  errors.name.type
                )}
              />
            )}
          </Field>
          <Field>
            <Label style={FONT.SUBTITLE2}>
              <h4>전화번호</h4>
            </Label>
            <Controller
              control={control}
              name="phoneNumber"
              rules={{
                required: true,
                pattern: REGEX.phoneNumber,
              }}
              render={({ field }) => (
                <AuthFormInput
                  style={FONT.SUBTITLE1}
                  type="string"
                  placeholder="전화번호를 입력하세요."
                  helpText={!isSubmitted && "하이픈(-) 제외 11자리 숫자"}
                  hasError={!!errors.phoneNumber}
                  {...field}
                />
              )}
            />
            {errors.phoneNumber && (
              <ErrorMessage
                message={getSignupFormFieldErrorMessage(
                  "phoneNumber",
                  errors.phoneNumber.type
                )}
              />
            )}
          </Field>
        </Fields>

        <Button type="submit" style={FONT.SUBTITLE1}>
          가입하기
        </Button>
      </Form>
    </Container>
  );
};

export default SignupForm;
