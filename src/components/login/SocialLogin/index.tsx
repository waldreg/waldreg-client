import SocialLoginButton from "../SocialLoginButton";
import socialLogin_google from "../../../assets/images/socialLogin_google.svg";

const SocialLogin = () => {
  return (
    <>
      <SocialLoginButton
        imgSRC={socialLogin_google}
        provider="Google"
        href=""
      />
      {/* TODO 네이버 소셜 로그인*/}

      {/* TODO 카카오 소셜 로그인*/}
    </>
  );
};

export default SocialLogin;
