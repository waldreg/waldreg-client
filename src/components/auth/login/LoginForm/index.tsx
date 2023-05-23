import { Controller, useForm, SubmitHandler } from "react-hook-form";
import { authAPI } from "../../../../apis/authAPI";
import { getLoginFormFieldErrorMessage } from "../../../../utils/getErrorMessage";
import AuthFormInput from "../../../common/authforminput";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../../../states/auth-context";
import ErrorMessage from "../../../common/errormessage";
import {
  Container,
  Form,
  Fields,
  Field,
  Label,
  Button,
  Text,
  SignupButton,
  Signup,
} from "./style";
import FONT from "../../../../constants/fonts";

interface LoginForm {
  userId: string;
  userPassword: string;
}

const LoginForm = () => {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const {
    control,
    formState: { errors },
    setError,
    handleSubmit,
  } = useForm<LoginForm>({
    defaultValues: {
      userId: "",
      userPassword: "",
    },
  });

  const onSubmit: SubmitHandler<LoginForm> = async ({
    userId,
    userPassword,
  }) => {
    try {
      const response = await authAPI.login(userId, userPassword);
      authCtx.login(response.access_token);
      navigate("/");
      const TOKEN_EXPIRE_TIME = 60 * 60 * 1000;
      setTimeout(() => {
        window.alert("로그인 유지 토큰이 만료되어 로그아웃됩니다.");
        authCtx.logout();
        navigate("/login");
      }, TOKEN_EXPIRE_TIME - 10);
    } catch (e: any) {
      setError(
        "userId",
        {
          type:
            e.response.data.code === "AUTH-404"
              ? "invalid"
              : "USER-406"
              ? "unknown"
              : "e.response.data.code",
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
                message={getLoginFormFieldErrorMessage(
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
              }}
              render={({ field }) => (
                <AuthFormInput
                  style={FONT.SUBTITLE1}
                  type="password"
                  placeholder="비밀번호를 입력하세요."
                  hasError={!!errors.userPassword}
                  {...field}
                />
              )}
            />
            {errors.userPassword && (
              <ErrorMessage
                message={getLoginFormFieldErrorMessage(
                  "userPassword",
                  errors.userPassword.type
                )}
              />
            )}
          </Field>
        </Fields>

        <Button type="submit" style={FONT.SUBTITLE1}>
          로그인
        </Button>

        <Signup>
          <Text style={FONT.SUBTITLE1}>아직 회원이 아니신가요?</Text>
          <SignupButton style={FONT.SUBTITLE1}>
            <Link to="/signup">가입하기</Link>
          </SignupButton>
        </Signup>
      </Form>
    </Container>
  );
};

export default LoginForm;
