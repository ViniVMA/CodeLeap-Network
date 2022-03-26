import * as S from "./home.style";

import { TitleBar } from "@/components/TitleBar";
import { useFetch } from "actions/hooks/useFetch";
import { PostCard } from "@/components/PostCard";
import { CreatePost } from "@/components/CreatePost";
import { Loading } from "@/components/Loading";
import { Login } from "@/components/Login";
import { DeletePostModal } from "@/components/PostCard/DeletePostModal";
import { EditPostModal } from "@/components/PostCard/EditPostModal";

import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import useStore from "redux/userStore";
import axios from "axios";

type FormValues = {
  title: string;
  content: string;
  username: string;
};

interface Post {
  username: string;
  id: number;
  content: string;
  created_datetime: string;
  title: string;
}

const url = `https://dev.codeleap.co.uk/careers/`;

export const HomePage = () => {
  const { data: user } = useStore();
  const { data, fetchresponse, loading } = useFetch<Post[]>(url);

  const methods = useForm<FormValues>({
    mode: "onChange",
  });

  const onSubmit = (data: FormValues) => {
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

  const deletePost = (id: number) => {
    axios.delete(`https://dev.codeleap.co.uk/careers/${id}/`).then(() => {
      setDeleteModalIsOpen(false);
      fetchresponse();
    });
  };

  const [editModalIsOpen, setEditModalIsOpen] = useState(false);

  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);

  const [modalData, setModalData] = useState<any | null>(null);

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
                    (
                      { id, username, content, created_datetime, title },
                      index,
                    ) => {
                      return (
                        <PostCard
                          handleDeleteClick={() => {
                            setDeleteModalIsOpen(true);
                            setModalData(data[index].id);
                          }}
                          handleEditClick={() => setEditModalIsOpen(true)}
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
                onDelete={() => deletePost(modalData)}
                test={modalData}
              />
              <EditPostModal
                modalIsOpen={editModalIsOpen}
                closeModal={(e) => {
                  e.stopPropagation();
                  setEditModalIsOpen(false);
                }}
              />
            </S.Content>
          </FormProvider>
        </S.Home>
      ) : (
        <Login />
      )}
    </>
  );
};
