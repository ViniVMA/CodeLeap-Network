import { Modal } from "@/components/Modal";
import { ReactNode, useState } from "react";
import { OnAfterOpenCallback } from "react-modal";
import * as S from "./deletePost.style";

interface ModalsProps {
  openModal?: React.MouseEventHandler;
  modalIsOpen: boolean;
  afterOpenModal?: OnAfterOpenCallback;
  closeModal?: (
    event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>,
  ) => void;
  onCancel?: React.MouseEventHandler;
  onDelete?: React.MouseEventHandler;
}

export const DeletePostModal = ({
  modalIsOpen,
  afterOpenModal,
  closeModal,
  onDelete,
}: ModalsProps) => {
  return (
    <Modal
      modalIsOpen={modalIsOpen}
      afterOpenModal={afterOpenModal}
      closeModal={closeModal}
    >
      <S.DeletePostModal>
        <span>Are you sure you want to delete this item?</span>
        <S.ButtonsWrapper>
          <S.CancelButton onClick={closeModal}>CANCEL</S.CancelButton>
          <S.DeleteButton onClick={onDelete}>OK</S.DeleteButton>
        </S.ButtonsWrapper>
      </S.DeletePostModal>
    </Modal>
  );
};
