import { Button } from "@/components/Button/button.style";
import styled from "styled-components";

export const DeletePostModal = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 2.2rem;
  line-height: 26px;
  max-width: 660px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

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

export const DeleteButton = styled(Button)``;

export const ButtonsWrapper = styled.div`
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 19px;
  display: flex;
  gap: 16px;
  justify-content: flex-end;
  width: 100%;
`;
