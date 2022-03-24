import styled from "styled-components";
import { Button } from "../Button/button.style";

export const CreatePost = styled.div`
  max-width: 723px;
  width: 100%;
  margin: 44px auto 34px auto;
  border: 1px solid #999;
`;

export const Content = styled.div`
  max-width: 659px;
  margin: 23px auto 29px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 35px;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    textarea {
      width: 100%;
      height: 74px;
      border: 1px solid #777777;
      margin-bottom: 35px;
      resize: none;
      padding: 10px;
      border-radius: 4px;
    }

    label {
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      margin-bottom: 7px;
    }
    input {
      margin-bottom: 19px;
    }
  }
`;

interface InputProps {
  error?: boolean;
}

export const Input = styled.input<InputProps>`
  max-height: 28px;
  height: 28px;
  width: 100%;
  align-items: stretch;
  border: 1px solid #777777;
  border: ${(props) => (props.error ? "1px solid red" : " 1px solid #777777")};
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 1.6rem;
  padding: 10px;
`;

interface ButtonProps {
  disabled?: boolean | undefined;
}

export const LoginButton = styled(Button)<ButtonProps>`
  align-self: end;
  height: 33px;
  /* opacity: ${(props) => (props.disabled ? "0.5" : "1")}; */
`;