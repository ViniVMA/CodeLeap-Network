import React from "react";
import * as S from "./titleBar.style";

interface TitleBarProps {
  title?: string;
}

export const TitleBar = ({ title }: TitleBarProps) => {
  return (
    <S.TitleBar>
      <h3>{title}</h3>
    </S.TitleBar>
  );
};
