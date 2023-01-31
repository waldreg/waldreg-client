import axios from "axios";
import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { api } from "../../../apis/axios";

/*
{
	"user_id" : "hello123",
	"user_password" : "hello1234"
}
*/

function Login() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const user_password = useRef();
  user_password.current = watch("user_password");

  const onSubmit = async (data) => {
    console.log(data);
    const { user_id, user_password } = data;
    try {
      const response = await api.post("/token", {
        user_id,
        user_password,
      });
      console.log(response);
      localStorage.clear();
      localStorage.setItem("access_token", response.data.access_token);
      // token이 필요한 API 요청 시 header Authorization에 token 담아서 보내기
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.access_token}`;
      window.location.replace("http://localhost:3000/");
    } catch (error) {
      alert(error.response.data);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
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
            //pattern: /(?=.[0-9])(?=.[a-zA-Z])(?=.*\\W)(?=\\S+$).{8,16}/,
          })}
        />
        {errors.user_password && errors.user_password.type === "required" && (
          <p>비밀번호를 입력해주세요.</p>
        )}
        {errors.user_password && errors.user_password.type === "pattern" && (
          <p>비밀번호는 8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.</p>
        )}
        <input type="submit" />
      </form>
    </div>
  );
}

export default Login;
