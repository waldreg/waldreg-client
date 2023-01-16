import { useNavigate } from "react-router-dom";
import { StyledButton } from "./style";

interface SocialLoginButtonProps {
  imgSRC: string;
  provider: string;
  href: string;
}

const SocialLoginButton = ({
  imgSRC,
  provider,
  href,
}: SocialLoginButtonProps) => {
  const navigate = useNavigate();

  return (
    <>
      <StyledButton>
        <img src={imgSRC} alt={provider} onClick={() => navigate(href)} />
        {provider} 계정으로 로그인
      </StyledButton>
    </>
  );
};

export default SocialLoginButton;
