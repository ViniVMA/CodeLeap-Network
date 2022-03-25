import * as S from "./background.style";

export const Background = () => {
  return (
    <S.Background>
      <S.OverBackground />
      <video id="backgroundVideo" autoPlay muted loop>
        <source
          src="/rocket_bw_small_2-54cc5582f5cc4a26d14da1accdb66daf.mp4"
          type="video/mp4"
        />
      </video>
    </S.Background>
  );
};
