import { TitleBar } from "../TitleBar";
import * as S from "./postCard.style";

interface PostCardProps {
  user: string;
  time: string;
  post: string;
}

export const PostCard = ({ user, time, post }: PostCardProps) => {
  return (
    <S.PostCard>
      <TitleBar />
      <S.ContentWrapper>
        <S.Content>
          <S.NameWrapper>
            <S.Name>@{user}</S.Name>
            <S.Time>{time}</S.Time>
          </S.NameWrapper>
          <p>{post}</p>
        </S.Content>
      </S.ContentWrapper>
    </S.PostCard>
  );
};
