import * as S from "./home.style";

import { TitleBar } from "@/components/TitleBar";
import { useFetch } from "src/actions/hooks/useFetch";
import { PostCard } from "@/components/PostCard";
import { CreatePost } from "@/components/CreatePost";

import { Login } from "@/modules/Login";
import { DeletePostModal } from "@/components/PostCard/DeletePostModal";
import { EditPostModal } from "@/components/PostCard/EditPostModal";

import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

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
  const { data, fetchresponse, loading } = useFetch<Post[]>(url);

  //Form Section

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
          .then(() => fetchresponse())
          .catch((error) => {})
      : "";
  };

  //Modals

  const deletePost = ({ id }: Post) => {
    axios.delete(`https://dev.codeleap.co.uk/careers/${id}/`).then(() => {
      setDeleteModalIsOpen(false);
      fetchresponse();
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
        fetchresponse();
        setEditModalIsOpen(false);
      });
  };

  const [editModalIsOpen, setEditModalIsOpen] = useState(false);

  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);

  const [modalData, setModalData] = useState<Post | null>(null);

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

            <S.CardsWrapper>
              {loading ? (
                <Loading />
              ) : (
                data?.map(
                  (
                    { id, username, content, created_datetime, title },
                    index,
                  ) => {
                    return (
                      <PostCard
                        handleDeleteClick={() => {
                          setDeleteModalIsOpen(true);
                          setModalData(data[index]);
                        }}
                        handleEditClick={() => {
                          setEditModalIsOpen(true);
                          setModalData(data[index]);
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
                )
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
