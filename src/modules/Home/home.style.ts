import { Button } from "@/components/Button/button.style";
import styled, { css } from "styled-components";

export const Home = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  max-width: 800px;
  width: 100%;
  height: fit-content;
  background-color: #fff;
  font-size: 2.2rem;
  padding-bottom: 20px;
  transition: transform 0.2s;
`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 44px;
  max-height: 40vh;
  height: 100%;
  overflow: scroll;
  overflow-x: hidden;
  max-width: 760px;
  width: 100%;
  margin: 0 auto;

  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(45deg, #8481fa, #38c9c8);
  }
`;

export const NavigationButton = styled(Button)`
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

export const ButtonsWrapper = styled.div`
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 19px;
  display: flex;
  gap: 16px;
  justify-content: center;
  width: 100%;
`;
