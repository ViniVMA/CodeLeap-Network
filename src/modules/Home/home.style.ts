import styled, { css } from "styled-components";

export const Home = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  max-width: 800px;
  width: 100%;
  background-color: #fff;
  font-size: 2.2rem;
`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 44px;
  max-height: 40%;
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
