import styled from "styled-components";
import COLOR from "../../../../constants/color";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  width: min(100%, 24rem);
`;

const Fields = styled.div`
  margin-bottom: 1rem;
`;

const Field = styled.div`
  padding-bottom: 1rem;
`;

const Label = styled.div`
  color: ${COLOR.GRAY5};
  padding-bottom: 0.3rem;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  background: ${COLOR.GREEN4};
  border-radius: 0.5rem;

  color: ${COLOR.WHITE};
  cursor: pointer;
`;

const Text = styled.p`
  color: ${COLOR.GRAY3};
  margin-right: 0.5rem;
`;

const SignupButton = styled.div`
  cursor: pointer;
  color: ${COLOR.GREEN4};
  font-weight: 600 !important;
`;

const Signup = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

export {
  Container,
  Form,
  Fields,
  Field,
  Label,
  Button,
  Text,
  SignupButton,
  Signup,
};
