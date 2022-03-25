import React, { useState } from "react";
import DeleteIcon from "../Icons/Delete";
import EditIcon from "../Icons/Edit";
import * as S from "./titleBar.style";

interface TitleBarProps {
  title?: string;
  isAuthor?: boolean;
}

export const TitleBar = ({ title, isAuthor }: TitleBarProps) => {
  return (
    <S.TitleBar>
      <h3>{title}</h3>
      {isAuthor ? (
        <S.IconsWrapper>
          <DeleteIcon />
          <EditIcon />
        </S.IconsWrapper>
      ) : null}
    </S.TitleBar>
  );
};
