import React, { ReactNode } from "react";
import { OnAfterOpenCallback, setAppElement } from "react-modal";

import * as S from "./modal.style";

interface ModalsProps {
  openModal?: React.MouseEventHandler;
  modalIsOpen: boolean;
  afterOpenModal?: OnAfterOpenCallback;
  closeModal?: (
    event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>,
  ) => void;
  children: ReactNode;
}

setAppElement("#__next");

export const Modal = ({
  modalIsOpen,
  afterOpenModal,
  closeModal,
  children,
}: ModalsProps) => {
  return (
    <S.StyledModal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      contentLabel="Example Modal"
      className="Modal"
      overlayClassName="Overlay"
    >
      <S.Container className="Container">{children}</S.Container>
    </S.StyledModal>
  );
};
