import React from "react";
import * as S from "./loading.style";

export const Loading = () => {
  return (
    <S.Loading>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </S.Loading>
  );
};
