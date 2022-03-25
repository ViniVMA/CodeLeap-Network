import styled from "styled-components";

export const Background = styled.div`
  position: fixed;
  z-index: -5;

  video {
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    object-fit: cover;
    opacity: 0.5;
  }
`;

export const OverBackground = styled.div`
  top: 0;
  position: fixed;
  background-color: #000;
  height: 100%;
  width: 100%;
  z-index: -4;
`;
