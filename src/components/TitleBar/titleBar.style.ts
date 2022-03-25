import styled from "styled-components";

interface TitleBarProps {
  Card?: boolean | undefined;
}

export const TitleBar = styled.div<TitleBarProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  height: ${(props) => (props.Card ? "70px" : "80px")};
  color: #fff;
  background: linear-gradient(45deg, #8481fa, #38c9c8);
  font-size: 2.2rem;
  padding: 10px 30px 10px 25px;

  h3 {
  }
`;

export const IconsWrapper = styled.div`
  display: flex;
  gap: 23px;
`;
