import * as S from "./login.style";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useState } from "react";

import useStore from "src/zustand/userStore";

type FormValues = {
  name: string;
};

export const Login = () => {
  const { setName } = useStore();
  const router = useRouter();

  const [user, setUser] = useState<FormValues>();

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<FormValues>({
    mode: "onChange",
  });
  // const onSubmit = handleSubmit((data) => setName(data));

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
          <input {...register("name", { required: true })} />
          <S.LoginButton type="submit">ENTER</S.LoginButton>
        </form>
      </S.LoginModal>
    </S.Login>
  );
};
