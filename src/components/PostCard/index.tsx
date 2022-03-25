import { TitleBar } from "../TitleBar";
import * as S from "./postCard.style";
import TimeAgo from "react-timeago";

interface PostCardProps {
  user: string;
  time: string;
  post: string;
  title?: string;
  isAuthor?: boolean;
  handleEditClick?: React.MouseEventHandler;
  handleDeleteClick?: React.MouseEventHandler;
}

export const PostCard = ({
  user,
  time,
  post,
  title,
  isAuthor,
  handleEditClick,
  handleDeleteClick,
}: PostCardProps) => {
  return (
    <S.PostCard>
      <TitleBar
        title={title}
        isAuthor={isAuthor}
        handleDeleteClick={handleDeleteClick}
        handleEditClick={handleEditClick}
      />
      <S.ContentWrapper>
        <S.Content>
          <S.NameWrapper>
            <S.Name>@{user}</S.Name>
            <S.Time>
              <TimeAgo date={time} />
            </S.Time>
          </S.NameWrapper>
          <p>{post}</p>
        </S.Content>
      </S.ContentWrapper>
    </S.PostCard>
  );
};
