import * as S from "./home.style";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useState } from "react";

import useStore from "src/zustand/userStore";

type FormValues = {
  name: string;
};

export const Home = () => {
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

  return <h1>Hello world</h1>;
};
