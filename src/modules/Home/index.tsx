import * as S from "./home.style";

import { TitleBar } from "@/components/TitleBar";
import useFetch from "src/actions/hooks/useFetch";
import { PostCard } from "@/components/PostCard";
import { CreatePost } from "@/components/CreatePost";

import { Login } from "@/modules/Login";
import { DeletePostModal } from "@/components/PostCard/DeletePostModal";
import { EditPostModal } from "@/components/PostCard/EditPostModal";

import { useCallback, useEffect, useRef, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { useInView } from "react-intersection-observer";
import useStore from "src/redux/userStore";
import axios from "axios";
import { Loading } from "@/components/Loading";

interface Post {
  username: string;
  id: number | null;
  content: string;
  created_datetime: string;
  title: string;
}

const url = `https://dev.codeleap.co.uk/careers/`;

export const HomePage = () => {
  //GlobalState
  const { data: user } = useStore();

  //Data Fetching
  const [offset, setOffset] = useState(10);

  let url = `https://dev.codeleap.co.uk/careers/?format=json&limit=20&offset=0`;

  let offsetUrl = `https://dev.codeleap.co.uk/careers/?format=json&limit=20&offset=${offset}`;

  const { data, refetch, loading, infiniteLoading } = useFetch<Post[]>(
    url,
    offsetUrl,
  );

  const [posts, setPosts] = useState<Post[] | null>(null);

  useEffect(() => {
    refetch();
    setPosts(data);
  }, [data]);

  //

  const methods = useForm<Post>({
    mode: "onChange",
  });

  const edit = useForm<Post>({
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const onSubmit = (data: Post) => {
    data.username = user.name;
    data.username.length > 0
      ? axios
          .post("https://dev.codeleap.co.uk/careers/", data, {
            headers: { "Content-Type": "application/json" },
          })
          .then(() => refetch())
          .catch((error) => {})
      : "";
  };

  //Modals

  const deletePost = ({ id }: Post) => {
    axios.delete(`https://dev.codeleap.co.uk/careers/${id}/`).then(() => {
      setDeleteModalIsOpen(false);
      refetch();
    });
  };

  const updatePost = (data: Post) => {
    const id = modalData!.id;
    axios
      .patch(`https://dev.codeleap.co.uk/careers/${id}/`, {
        title: data.title,
        content: data.content,
      })
      .then(() => {
        setEditModalIsOpen(false);
        refetch();
      });
  };

  const [editModalIsOpen, setEditModalIsOpen] = useState(false);

  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);

  const [modalData, setModalData] = useState<Post | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  const { ref, inView } = useInView();

  return (
    <>
      {user.name ? (
        <S.Home>
          <S.Content>
            <TitleBar title="CodeLeap Network" />
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onSubmit)}>
                <CreatePost />
              </form>
            </FormProvider>

            <S.CardsWrapper ref={containerRef}>
              {loading ? (
                <Loading />
              ) : (
                <>
                  {posts?.map(
                    (
                      { id, username, content, created_datetime, title },
                      index,
                    ) => {
                      return (
                        <PostCard
                          handleDeleteClick={() => {
                            setDeleteModalIsOpen(true);
                            setModalData(posts[index]);
                          }}
                          handleEditClick={() => {
                            setEditModalIsOpen(true);
                            setModalData(posts[index]);
                          }}
                          isAuthor={username === user.name}
                          key={id}
                          user={username}
                          post={content}
                          time={created_datetime}
                          title={title}
                        />
                      );
                    },
                  )}
                  <S.ButtonsWrapper ref={ref}>
                    {inView ? (
                      <>
                        <></>
                      </>
                    ) : null}
                  </S.ButtonsWrapper>
                </>
              )}
            </S.CardsWrapper>
            <DeletePostModal
              modalIsOpen={deleteModalIsOpen}
              closeModal={() => setDeleteModalIsOpen(false)}
              onDelete={() => deletePost(modalData!)}
            />
            <FormProvider {...edit}>
              <form>
                <EditPostModal
                  modalIsOpen={editModalIsOpen}
                  closeModal={() => setEditModalIsOpen(false)}
                  titleValue={modalData?.title}
                  contentValue={modalData?.content}
                  onEdit={edit.handleSubmit(updatePost)}
                />
              </form>
            </FormProvider>
          </S.Content>
        </S.Home>
      ) : (
        <Login />
      )}
    </>
  );
};
