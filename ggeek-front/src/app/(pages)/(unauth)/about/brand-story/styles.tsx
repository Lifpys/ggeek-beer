import styled from "styled-components";
//img
import BgBrandStory from "@/assets/image/about/bg_brand_story.png";

const Container = styled.div`
  .icon {
    width: 68px;
    margin-bottom: 15px;
  }

  .title {
    margin-bottom: 30px;
    font-size: 32px;
    color: var(--primary);
    line-height: 1.4;
  }

  .desc {
    color: var(--black);
    line-height: 1.5;
    word-break: keep-all;
  }

  .section01 {
    position: relative;
    padding-bottom: 315px;

    &::before,
    &::after {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 100vw;
      content: "";
      z-index: -1;
    }

    &::before {
      height: 821px;
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0) 30%,
        #4774b9 204.91%
      );
    }

    &::after {
      height: 255px;
      background: url(${BgBrandStory.src}) no-repeat center / cover;
    }

    .img {
      position: relative;
      height: 300px;
      margin-bottom: 40px;
    }

    .descWrap {
      display: flex;
      gap: 40px;
    }
  }

  .section02,
  .section03 {
    margin-bottom: 60px;
  }

  .section04 {
    margin-bottom: 80px;
  }

  .section02,
  .section03,
  .section04 {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .textWrap {
      flex-shrink: 0;
      white-space: pre-line;
    }

    .img {
      flex-shrink: 0;
      position: relative;
      width: 580px;
      height: 300px;
    }
  }

  .img05 {
    width: 415px;
    margin: 0 auto;
  }

  @media (max-width: 1300px) {
    .icon {
      width: calc(100vw * (68 / 1300));
      margin-bottom: calc(100vw * (15 / 1300));
    }

    .title {
      margin-bottom: calc(100vw * (30 / 1300));
      font-size: calc(100vw * (32 / 1300));
    }

    .section01 {
      padding-bottom: calc(100vw * (315 / 1300));

      &::before {
        height: calc(100vw * (821 / 1300));
      }

      &::after {
        height: calc(100vw * (255 / 1300));
      }

      .img {
        height: calc(100vw * (300 / 1300));
        margin-bottom: calc(100vw * (40 / 1300));
      }

      .descWrap {
        gap: calc(100vw * (40 / 1300));
      }
    }

    .section02,
    .section03 {
      margin-bottom: calc(100vw * (60 / 1300));
    }

    .section04 {
      margin-bottom: calc(100vw * (80 / 1300));
    }

    .section02,
    .section03,
    .section04 {
      .img {
        width: calc(100vw * (580 / 1300));
        height: calc(100vw * (300 / 1300));
      }
    }

    .img05 {
      width: calc(100vw * (415 / 1300));
    }
  }

  @media (max-width: 767px) {
    .icon {
      width: calc(100vw * (58 / 375));
      margin-bottom: calc(100vw * (15 / 375));
    }

    .title {
      margin-bottom: calc(100vw * (20 / 375));
      font-size: calc(100vw * (24 / 375));
    }

    .section01 {
      padding-bottom: calc(100vw * (100 / 375));

      &::before {
        height: calc(100vw * (505 / 375));
      }

      &::after {
        height: calc(100vw * (50 / 375));
      }

      .img {
        height: calc(100vw * (86 / 375));
        margin-bottom: calc(100vw * (30 / 375));
      }

      .descWrap {
        flex-direction: column;
        gap: calc(100vw * (20 / 375));
      }
    }

    .section02 {
      padding-top: calc(100vw * (40 / 375));
    }

    .section02,
    .section03 {
      margin-bottom: calc(100vw * (40 / 375));
    }

    .section04 {
      margin-bottom: calc(100vw * (40 / 375));
    }

    .section02,
    .section03,
    .section04 {
      flex-direction: column;
      align-items: flex-start;
      gap: calc(100vw * (30 / 375));

      .img {
        width: 100%;
        height: calc(100vw * (177 / 375));
      }
    }

    .img05 {
      width: calc(100vw * (190 / 375));
    }
  }
`;

export { Container };

export default {
  Container,
};
