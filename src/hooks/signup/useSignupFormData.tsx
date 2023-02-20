import { useContext } from "react";
import { SignupFormDataContext } from "../../components/auth/signup/SignupFormDataProvider";

const useSignupFormData = () => useContext(SignupFormDataContext);

export default useSignupFormData;
