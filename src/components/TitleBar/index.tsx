import React, { useState } from "react";
import DeleteIcon from "../Icons/Delete";
import EditIcon from "../Icons/Edit";
import * as S from "./titleBar.style";

interface TitleBarProps {
  title?: string;
  isAuthor?: boolean;
  handleEditClick?: React.MouseEventHandler;
  handleDeleteClick?: React.MouseEventHandler;
}

export const TitleBar = ({
  title,
  isAuthor,
  handleDeleteClick,
  handleEditClick,
}: TitleBarProps) => {
  return (
    <S.TitleBar>
      <h3>{title}</h3>
      {isAuthor ? (
        <S.IconsWrapper>
          <DeleteIcon onClick={handleDeleteClick} />
          <EditIcon onClick={handleEditClick} />
        </S.IconsWrapper>
      ) : null}
    </S.TitleBar>
  );
};
