import styled from "styled-components";

interface TitleBarProps {
  Card?: boolean | undefined;
}

export const TitleBar = styled.div<TitleBarProps>`
  display: flex;
  align-items: center;
  height: 80px;
  height: ${(props) => (props.Card ? "70px" : "80px")};
  color: #fff;
  background-color: #000;
  font-size: 2.2rem;
  padding: 10px 30px 0 25px;

  h3 {
  }
`;
