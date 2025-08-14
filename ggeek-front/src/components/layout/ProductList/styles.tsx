import styled from "styled-components";
import Link from "next/link";

const Container = styled(Link)`
  position: relative;

  .tag {
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    gap: 15px;
    font-size: 14px;
    font-weight: 600;
    color: var(--neutral-600);
    z-index: 1;
  }

  .img {
    position: relative;
    width: 100%;
    margin-bottom: 15px;
    aspect-ratio: 1;
    background-color: var(--primary);
    overflow: hidden;
  }

  .title {
    font-weight: 500;
  }

  @media (max-width: 1300px) {
    .tag {
      top: calc(100vw * (10 / 1300));
      right: calc(100vw * (10 / 1300));
      gap: calc(100vw * (15 / 1300));
      font-size: calc(100vw * (14 / 1300));
    }
    .img {
      margin-bottom: calc(100vw * (15 / 1300));
    }
  }

  @media (max-width: 767px) {
    .tag {
      top: calc(100vw * (10 / 375));
      right: calc(100vw * (10 / 375));
      gap: calc(100vw * (10 / 375));
      font-size: calc(100vw * (12 / 375));
    }
    .img {
      margin-bottom: calc(100vw * (10 / 375));
    }
  }
`;

export { Container };

export default {
  Container,
};
