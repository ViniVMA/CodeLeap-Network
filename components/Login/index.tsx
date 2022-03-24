import * as S from "./login.style";

export const Login = () => {
  return (
    <S.Login>
      <S.LoginModal>
        <h1>Welcome to CodeLeap network!</h1>
        <p>Please enter your username</p>
        <input type="text" id="name" name="name" required />

        <S.LoginButton>ENTER</S.LoginButton>
      </S.LoginModal>
    </S.Login>
  );
};
