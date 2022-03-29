import * as S from "./home.style";

import { TitleBar } from "@/components/TitleBar";
import useFetch from "src/actions/hooks/useFetch";
import { PostCard } from "@/components/PostCard";
import { CreatePost } from "@/components/CreatePost";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Login } from "@/modules/Login";
import { DeletePostModal } from "@/components/PostCard/DeletePostModal";
import { EditPostModal } from "@/components/PostCard/EditPostModal";

import { useCallback, useEffect, useRef, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { useInView } from "react-intersection-observer";
import useStore from "src/redux/userStore";
import axios from "axios";
import { Loading } from "@/components/Loading";
import useUpdateEffect from "@/actions/hooks/useUpdateEffect";

interface Post {
  username: string;
  id: number | null;
  content: string;
  created_datetime: string;
  title: string;
}

export const HomePage = () => {
  const notify = () => toast("🚀 Success");

  //GlobalState
  const { data: user } = useStore();

  //Data Fetching
  const [offset, setOffset] = useState(0);

  let url = `https://dev.codeleap.co.uk/careers/?format=json&limit=10`;
  let offSetUrl = `https://dev.codeleap.co.uk/careers/?format=json&limit=${offset}`;

  const { data, refetch, loading, infiniteLoading } = useFetch<Post[]>(
    url,
    offSetUrl,
  );

  const [posts, setPosts] = useState<Post[] | null>(null);

  const handleInfiniteLoading = () => {
    setOffset(offset + 10);
  };

  const { ref, inView } = useInView();

  useUpdateEffect(() => {
    setPosts(data);
    console.log(offset);
  }, [data]);

  useEffect(() => {
    console.log(inView);
    handleInfiniteLoading();
  }, [inView]);

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
          .then(() => notify())
          .catch((error) => {})
      : "";
  };

  //Modals

  const deletePost = ({ id }: Post) => {
    axios
      .delete(`https://dev.codeleap.co.uk/careers/${id}/`)
      .then(() => {
        setDeleteModalIsOpen(false);
        refetch();
      })
      .then(() => notify());
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
      })
      .then(() => notify());
  };

  const [editModalIsOpen, setEditModalIsOpen] = useState(false);

  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);

  const [modalData, setModalData] = useState<Post | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

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
                  {!infiniteLoading ? (
                    <S.ButtonsWrapper ref={ref}>
                      <Loading />
                    </S.ButtonsWrapper>
                  ) : null}
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
