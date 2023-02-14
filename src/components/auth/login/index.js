import { useRef, useContext } from "react";
import { waldregAxios } from "../../../apis/axios";
import AuthContext from "../../../states/auth-context";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const userIdInputRef = useRef();
  const userPasswordInputRef = useRef();

  const authCtx = useContext(AuthContext);

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const enteredUserId = userIdInputRef.current.value;
      const enteredUserPassword = userPasswordInputRef.current.value;
      const response = await waldregAxios.post("/token", {
        user_id: enteredUserId,
        user_password: enteredUserPassword,
      });
      authCtx.login(response.data.access_token);
      navigate("/", true);
    } catch (error) {
      const errorMessage = error.response.data.messages;
      alert(errorMessage);
    }
  };

  return (
    <section>
      <h1>로그인</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="user_id">아이디</label>
          <input type="text" id="user_id" required ref={userIdInputRef} />
        </div>
        <div>
          <label htmlFor="user_password">비밀번호</label>
          <input
            type="password"
            id="user_password"
            required
            ref={userPasswordInputRef}
          />
        </div>
        <div>
          <button>로그인하기</button>
        </div>
      </form>
    </section>
  );
};

export default LoginForm;
