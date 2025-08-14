import styled from "styled-components";

const Container = styled.div`
  width: 356px;

  .img {
    position: relative;
    width: 100%;
    margin-bottom: 15px;
    aspect-ratio: 1;
    background-color: var(--primary);
    overflow: hidden;
  }

  .title {
    display: -webkit-box;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.4;
    word-break: break-all;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .date {
    margin-top: 10px;
    font-size: 14px;
  }

  @media (max-width: 1300px) {
    width: calc(100vw * (356 / 1300));

    .img {
      margin-bottom: calc(100vw * (15 / 1300));
    }

    .title {
      font-size: calc(100vw * (18 / 1300));
    }

    .date {
      margin-top: calc(100vw * (10 / 1300));
      font-size: calc(100vw * (14 / 1300));
    }
  }

  @media (max-width: 767px) {
    width: 100%;

    .img {
      margin-bottom: calc(100vw * (10 / 375));
    }

    .title {
      font-size: calc(100vw * (16 / 375));
    }

    .date {
      margin-top: calc(100vw * (8 / 375));
      font-size: calc(100vw * (12 / 375));
    }
  }
`;

export { Container };

export default {
  Container,
};
