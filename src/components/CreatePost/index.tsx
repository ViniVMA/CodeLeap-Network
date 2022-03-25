import { useForm, useFormContext } from "react-hook-form";
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
  const { register } = useFormContext();

  const { data: user } = useStore();

  return (
    <S.CreatePost>
      <S.Content>
        <h3>What’s on your mind? {user.name}</h3>
        <S.FormWrapper>
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
          <S.LoginButton type="submit">Teste</S.LoginButton>
        </S.FormWrapper>
      </S.Content>
    </S.CreatePost>
  );
};
