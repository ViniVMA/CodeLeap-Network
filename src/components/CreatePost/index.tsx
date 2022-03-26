import { useFormContext } from "react-hook-form";

import useStore from "src/redux/userStore";
import * as S from "./createPost.style";

export const CreatePost = () => {
  const { register, formState } = useFormContext();

  const { data: user } = useStore();

  const { isDirty, isValid } = formState;

  return (
    <S.CreatePost>
      <S.Content>
        <h3>
          Welcome <span>{user.name ? `${user.name}` : "Please Log-in"},</span>{" "}
          What’s on your mind?
        </h3>
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
          <S.CreateButton disabled={!isDirty || !isValid} type="submit">
            CREATE
          </S.CreateButton>
        </S.FormWrapper>
      </S.Content>
    </S.CreatePost>
  );
};
