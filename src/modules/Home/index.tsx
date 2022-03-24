import * as S from "./home.style";

import useStore from "src/zustand/userStore";
import { TitleBar } from "@/components/TitleBar";

type FormValues = {
  name: string;
};

export const Home = () => {
  const { data } = useStore();

  return (
    <S.Home>
      <S.Content>
        <TitleBar />
      </S.Content>
    </S.Home>
  );
};
