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

  h3 {
    span {
      background: linear-gradient(45deg, #8481fa, #38c9c8);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-decoration-color: linear-gradient(45deg, #8481fa, #38c9c8);
    }
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 35px;
  font-weight: 400;
  font-size: 1.4rem;
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
    font-size: 1.6rem;
    line-height: 19px;
    margin-bottom: 7px;
  }
  input {
    margin-bottom: 19px;
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

export const CreateButton = styled(Button)<ButtonProps>`
  align-self: end;
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
`;
