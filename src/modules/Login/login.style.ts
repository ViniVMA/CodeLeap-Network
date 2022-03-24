import { Button } from "@/components/Button/button.style";
import styled, { css } from "styled-components";

export const Home = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
`;

export const LoginModal = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  /* max-height: 220px; */
  /* height: 100%; */
  background-color: #fff;
  padding: 25px;
  border: 1px solid #cccccc;

  h1 {
    font-weight: 700;
    font-size: 2.2rem;
    line-height: 26px;
    background: linear-gradient(45deg, #8481fa, #38c9c8);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-decoration-color: linear-gradient(45deg, #8481fa, #38c9c8);
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    margin: 30px 0 15px;

    @media (max-width: 768px) {
      margin: 5px 0;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    input {
      max-height: 28px;
      height: 28px;
      width: 100%;
      align-items: stretch;
      background: #ffffff;
      border: 1px solid #777777;
      box-sizing: border-box;
      border-radius: 4px;
      font-size: 1.6rem;
    }
  }
`;

interface ButtonProps {
  disabled?: boolean | undefined;
}

export const LoginButton = styled(Button)<ButtonProps>`
  align-self: end;
  margin-top: 20px;

  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
`;
