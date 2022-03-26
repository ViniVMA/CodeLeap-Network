import * as S from "./editPost.style";
import { Modal } from "@/components/Modal";
import { OnAfterOpenCallback } from "react-modal";
import { useForm, useFormContext } from "react-hook-form";
import { useEffect } from "react";

interface ModalsProps {
  openModal?: React.MouseEventHandler;
  modalIsOpen: boolean;
  titleValue?: string;
  contentValue?: string;
  afterOpenModal?: OnAfterOpenCallback;
  closeModal?: (
    event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>,
  ) => void;
  onEdit?: () => void;
}

export const EditPostModal = ({
  modalIsOpen,
  afterOpenModal,
  closeModal,
  titleValue,
  contentValue,
  onEdit,
}: ModalsProps) => {
  const { register, formState, setValue } = useFormContext();

  const { isDirty, isValid } = formState;

  useEffect(() => {
    setValue<any>("title", titleValue);
    setValue<any>("content", contentValue);
  }, [contentValue, titleValue, setValue]);
  return (
    <Modal
      modalIsOpen={modalIsOpen}
      afterOpenModal={afterOpenModal}
      closeModal={closeModal}
    >
      <S.FormWrapper>
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
        <S.ButtonsWrapper>
          <S.CancelButton onClick={closeModal}>CLOSE</S.CancelButton>
          <S.EditButton onClick={onEdit} type="submit">
            SAVE
          </S.EditButton>
        </S.ButtonsWrapper>
      </S.FormWrapper>
    </Modal>
  );
};
