import styled from "styled-components";

export const PostCard = styled.div`
  max-width: 723px;
  width: 100%;
`;

export const ContentWrapper = styled.div`
  border: 1px solid #999;
`;

export const Content = styled.div`
  max-width: 662px;
  width: 100%;
  margin: 24px auto 40px; auto;

  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
  }
`;

export const NameWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  color: #777777;
  line-height: 21px;
  font-size: 18px;
  margin-bottom: 18px;
`;

export const Name = styled.span`
  font-weight: 700;
`;

export const Time = styled.span`
  font-weight: 400;
`;
