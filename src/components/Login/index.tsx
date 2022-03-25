import * as S from "./login.style";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useState } from "react";

import useStore from "redux/userStore";

type FormValues = {
  name: string;
};

export const Login = () => {
  const { setName } = useStore();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<FormValues>({
    mode: "onChange",
  });

  function onSubmit(data: FormValues) {
    setName(data);
    data.name.length > 0 ? router.push("home") : "";
  }

  return (
    <S.Login>
      <S.LoginModal>
        <h1>Welcome to CodeLeap network!</h1>
        <p>Please enter your username</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <S.Input {...register("name", { required: true })} />

          <S.LoginButton disabled={!isValid} type="submit">
            ENTER
          </S.LoginButton>
        </form>
      </S.LoginModal>
    </S.Login>
  );
};
