import * as S from "./home.style";

import useStore from "redux/userStore";
import { TitleBar } from "@/components/TitleBar";
import { useFetch } from "actions/hooks/useFetch";
import { PostCard } from "@/components/PostCard";
import { CreatePost } from "@/components/CreatePost";

interface Results {
  id: string;
  username: string;
  content: string;
  created_datetime: string;
  title: string;
}
interface Post {
  username: string;
  id: string;
  content: string;
  created_datetime: string;
  title: string;
}

const url = `https://dev.codeleap.co.uk/careers/`;

export const HomePage = () => {
  const { data } = useFetch<Post[]>(url);

  const { data: user } = useStore();

  return (
    <S.Home>
      <S.Content>
        <TitleBar />
        <CreatePost />
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
    </S.Home>
  );
};
