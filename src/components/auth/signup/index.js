import { useRef } from "react";
import { waldregAxios } from "../../../apis/axios";

const SignupForm = () => {
  const nameInputRef = useRef();
  const userIdInputRef = useRef();
  const userPasswordInputRef = useRef();
  const phoneNumberInputRef = useRef();

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const enteredName = nameInputRef.current.value;
      const enteredUserId = userIdInputRef.current.value;
      const enteredUserPassword = userPasswordInputRef.current.value;
      const enteredPhoneNumber = phoneNumberInputRef.current.value;
      const response = await waldregAxios.post("/user", {
        name: enteredName,
        user_id: enteredUserId,
        user_password: enteredUserPassword,
        phone_number: enteredPhoneNumber,
      });
    } catch (error) {
      const errorMessage = error.response.data.messages;
      alert(errorMessage);
    }
  };

  return (
    <section>
      <h1>회원가입</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="name">이름</label>
          <input type="text" id="name" required ref={nameInputRef} />
        </div>
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
          <label htmlFor="phone_number">전화번호</label>
          <input
            type="number"
            id="phone_number"
            required
            ref={phoneNumberInputRef}
          />
        </div>
        <div>
          <button>가입하기</button>
        </div>
      </form>
    </section>
  );
};

export default SignupForm;
