import * as S from "./home.style";
import {
  FormProvider,
  useForm,
  useFormContext,
  useFormState,
} from "react-hook-form";

import useStore from "redux/userStore";
import { TitleBar } from "@/components/TitleBar";
import { useFetch } from "actions/hooks/useFetch";
import { PostCard } from "@/components/PostCard";
import { CreatePost } from "@/components/CreatePost";
import { useEffect, useState } from "react";
import axios from "axios";
import { Loading } from "@/components/Loading";
import { useRouter } from "next/router";
import { Login } from "@/components/Login";

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
  const { data: user } = useStore();
  const { data, fetchresponse, loading } = useFetch<Post[]>(url);
  const router = useRouter();

  // setInterval(() => fetchresponse(), 60000);

  const methods = useForm<FormValues>({
    mode: "onChange",
  });

  const alerta = () => {
    alert("Hello World");
  };

  const onSubmit = (data: FormValues) => {
    data.username = user.name;
    data.username.length > 0
      ? axios
          .post("https://dev.codeleap.co.uk/careers/", data, {
            headers: { "Content-Type": "application/json" },
          })
          .then(() => fetchresponse())
          .catch((error) => {
            console.log(error.data);
          })
      : "";
  };

  return (
    <>
      {user.name ? (
        <S.Home>
          <FormProvider {...methods}>
            <S.Content>
              <TitleBar title="CodeLeap Network" />
              <form onSubmit={methods.handleSubmit(onSubmit)}>
                <CreatePost />
              </form>
              <S.CardsWrapper>
                {loading ? (
                  <Loading />
                ) : (
                  data?.map(
                    ({ id, username, content, created_datetime, title }) => {
                      return (
                        <PostCard
                          handleDeleteClick={() => alerta()}
                          handleEditClick={() => alerta()}
                          isAuthor={username === user.name}
                          key={id}
                          user={username}
                          post={content}
                          time={created_datetime}
                          title={title}
                        />
                      );
                    },
                  )
                )}
              </S.CardsWrapper>
            </S.Content>
          </FormProvider>
        </S.Home>
      ) : (
        <Login />
      )}
    </>
  );
};
