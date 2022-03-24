import styled from "styled-components";

export const Button = styled.button`
  font-size: 2.2rem;
  max-width: 111px;
  max-height: 33px;
  width: 100%;
  height: 100%;
  flex: 1 1 auto;
  padding: 0;
  border: none;
  outline: none;
  color: #fff;
  border-radius: 5px;
  background: linear-gradient(45deg, #8481fa, #38c9c8);
  -webkit-background-size: 150% 150%;
  background-size: 150% 150%;
  cursor: pointer;
  transition: transform 0.2s;

  :hover {
    transform: scale(1.1);
  }
`;
