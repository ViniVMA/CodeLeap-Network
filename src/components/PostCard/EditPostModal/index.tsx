import * as S from "./editPost.style";
import { Modal } from "@/components/Modal";
import { OnAfterOpenCallback } from "react-modal";
import { useFormContext } from "react-hook-form";

interface ModalsProps {
  openModal?: React.MouseEventHandler;
  modalIsOpen: boolean;
  afterOpenModal?: OnAfterOpenCallback;
  closeModal?: (
    event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>,
  ) => void;
}

export const EditPostModal = ({
  modalIsOpen,
  afterOpenModal,
  closeModal,
}: ModalsProps) => {
  const { register, formState } = useFormContext();

  return (
    <Modal
      modalIsOpen={modalIsOpen}
      afterOpenModal={afterOpenModal}
      closeModal={closeModal}
    >
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
        <S.LoginButton type="submit">CREATE</S.LoginButton>
      </S.FormWrapper>
      <button onClick={closeModal}>Fechar</button>
    </Modal>
  );
};
