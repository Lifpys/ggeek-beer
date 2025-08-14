import styled from "styled-components";
import Link from "next/link";
//img
import IconLink from "@/assets/image/icon/icon_link_white.svg";

const Container = styled(Link)`
  position: relative;
  width: 600px;
  height: 160px;
  padding: 30px 40px;
  font-weight: 500;
  color: var(--white);
  overflow: hidden;

  &:hover .bg {
    transform: scale(1.1);
  }

  .title {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 24px;

    &::after {
      display: block;
      width: 38px;
      height: 38px;
      background: url(${IconLink.src}) no-repeat center / cover;
      content: "";
    }
  }

  .desc {
    margin-top: 10px;
    font-size: 14px;
  }

  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    transition: transform 0.3s ease-in-out;
  }

  @media (max-width: 1300px) {
    width: calc(100vw * (600 / 1300));
    height: calc(100vw * (160 / 1300));
    padding: calc(100vw * (30 / 1300)) calc(100vw * (40 / 1300));

    .title {
      gap: calc(100vw * (10 / 1300));
      font-size: calc(100vw * (24 / 1300));

      &::after {
        width: calc(100vw * (38 / 1300));
        height: calc(100vw * (38 / 1300));
      }
    }

    .desc {
      margin-top: calc(100vw * (10 / 1300));
      font-size: calc(100vw * (14 / 1300));
    }
  }

  @media (max-width: 767px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: calc(100vw * (91 / 375));
    padding: 0 calc(100vw * (20 / 375));

    .title {
      gap: calc(100vw * (10 / 375));
      font-size: calc(100vw * (18 / 375));

      &::after {
        width: calc(100vw * (28 / 375));
        height: calc(100vw * (28 / 375));
      }
    }

    .desc {
      margin-top: calc(100vw * (5 / 375));
      font-size: calc(100vw * (12 / 375));
    }
  }
`;

export { Container };

export default {
  Container,
};
