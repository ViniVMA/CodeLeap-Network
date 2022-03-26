import styled from "styled-components";
import ReactModal from "react-modal";

export const StyledModal = styled(ReactModal)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00000091;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  z-index: 1031;
`;

export const Container = styled.div`
  background-color: #fff;
  max-width: 660px;
  width: 100%;
  position: relative;
  padding: 34px;
`;
