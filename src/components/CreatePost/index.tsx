import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useState } from "react";

import useStore from "redux/userStore";
import * as S from "./createPost.style";

import axios from "axios";

type FormValues = {
  title: string;
  content: string;
  username: string;
};

export const CreatePost = () => {
  const { data: user } = useStore();

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
          .then((response) => {})
          .catch((error) => {
            console.log(error.data);
          })
      : "";
  };

  return (
    <S.CreatePost>
      <S.Content>
        <h3>What’s on your mind?</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div {...register("username")} />
          <label>Title</label>
          <S.Input
            type="text"
            placeholder="Title"
            {...register("title", { required: true })}
          />

          <label>Content</label>
          <textarea
            placeholder="Content"
            {...register("content", { required: true })}
          />
          <input type="submit" />
        </form>
      </S.Content>
    </S.CreatePost>
  );
};
