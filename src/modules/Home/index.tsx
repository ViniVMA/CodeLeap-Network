import * as S from "./home.style";
import { FormProvider, useForm, useFormContext } from "react-hook-form";

import useStore from "redux/userStore";
import { TitleBar } from "@/components/TitleBar";
import { useFetch } from "actions/hooks/useFetch";
import { PostCard } from "@/components/PostCard";
import { CreatePost } from "@/components/CreatePost";
import { useEffect, useState } from "react";
import axios from "axios";

type FormValues = {
  title: string;
  content: string;
  username: string;
};

interface Post {
  username: string;
  id: string;
  content: string;
  created_datetime: string;
  title: string;
}

const url = `https://dev.codeleap.co.uk/careers/`;

export const HomePage = () => {
  const methods = useForm();
  const { data: user } = useStore();
  const { data, fetch } = useFetch<Post[]>(url);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    data.username = user.name;
    data.username.length > 0
      ? axios
          .post("https://dev.codeleap.co.uk/careers/", data, {
            headers: { "Content-Type": "application/json" },
          })
          .then((response) => {
            () => fetch;
          })
          .catch((error) => {
            console.log(error.data);
          })
      : "";
  };

  return (
    <S.Home>
      <FormProvider {...methods}>
        <S.Content>
          <TitleBar />
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <CreatePost />
          </form>

          <S.CardsWrapper>
            {data?.map(({ id, username, content, created_datetime, title }) => {
              return (
                <PostCard
                  key={id}
                  user={username}
                  post={content}
                  time={created_datetime}
                />
              );
            })}
          </S.CardsWrapper>
        </S.Content>
      </FormProvider>
    </S.Home>
  );
};
