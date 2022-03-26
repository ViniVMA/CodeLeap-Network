import { Button } from "@/components/Button/button.style";
import styled from "styled-components";

export const EditPostModal = styled.div``;

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

export const CancelButton = styled(Button)`
  box-shadow: 0 0 6px 0 rgba(157, 96, 212, 0.5);
  color: #000;
  border: solid 3px transparent;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0)
    ),
    linear-gradient(101deg, #8481fa, #38c9c8);
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 2px 1000px 1px #fff inset;
`;

export const EditButton = styled(Button)``;

export const ButtonsWrapper = styled.div`
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 19px;
  display: flex;
  gap: 16px;
  justify-content: space-between;
  width: 100%;
`;
