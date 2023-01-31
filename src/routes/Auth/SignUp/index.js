import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { api } from "../../../apis/axios";

/*
name: "홍길동",
user_id: "hello123",
user_password: "1234@!aA5678",
phone_number: "010-1234-1234",
*/

function SignUp() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const user_password = useRef();
  user_password.current = watch("user_password");

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    console.log(data);
    const { name, user_id, user_password, phone_number } = data;
    try {
      const response = await api.post("/user", {
        name,
        user_id,
        user_password,
        phone_number,
      });
      console.log(response);
    } catch (error) {
      alert(error.response.data);
    }
    setLoading(false);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>이름</label>
        <input
          name="name"
          type="text"
          {...register("name", {
            required: true,
          })}
        />
        {errors.name && errors.name.type === "required" && (
          <p>이름을 입력해주세요.</p>
        )}
        {errors.name && errors.name.type === "pattern" && (
          <p>이름 형식에 맞지 않습니다. 한글로 올바르게 이름을 입력해주세요.</p>
        )}
        <label>아이디</label>
        <input
          name="user_id"
          type="text"
          {...register("user_id", {
            required: true,
          })}
        />
        {errors.user_id && <p>아이디를 입력해주세요.</p>}
        <label>비밀번호</label>
        <input
          name="user_password"
          type="password"
          {...register("user_password", {
            required: true,
            pattern: /(?=.[0-9])(?=.[a-zA-Z])(?=.*\\W)(?=\\S+$).{8,16}/,
          })}
        />
        {errors.user_password && errors.user_password.type === "required" && (
          <p>비밀번호를 입력해주세요.</p>
        )}
        {errors.user_password && errors.user_password.type === "pattern" && (
          <p>비밀번호는 8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.</p>
        )}
        <label>비밀번호 확인</label>
        <input
          name="user_password_confirm"
          type="password"
          {...register("user_password_confirm", {
            required: true,
            validate: (value) => value === user_password.current,
          })}
        />
        {errors.user_password_confirm &&
          errors.user_password_confirm.type === "required" && (
            <p>비밀번호 확인을 해주세요.</p>
          )}
        {errors.user_password_confirm &&
          errors.user_password_confirm.type === "validate" && (
            <p>비밀번호가 일치하지 않습니다.</p>
          )}
        <label>전화번호</label>
        <input
          name="phone_number"
          type="text"
          {...register("phone_number", {
            required: true,
            pattern: /^01(?:0|1|[6-9])[.-]?(\\d{3}|\\d{4})[.-]?(\\d{4})$/,
          })}
        />
        {errors.phone_number && errors.phone_number.type === "pattern" && (
          <p>10 ~ 11 자리의 숫자만 입력 가능합니다.</p>
        )}
        <input type="submit" disabled={loading} />
      </form>
    </div>
  );
}

export default SignUp;
