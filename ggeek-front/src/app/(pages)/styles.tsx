import styled from "styled-components";
//img
import BgFindSection from "@/assets/image/main/bg_find_section.png";
import BgBehindSection from "@/assets/image/main/bg_behind_section.png";
import IconLink from "@/assets/image/icon/icon_link.svg";

const Container = styled.main`
  padding-top: 0;
  background: none;

  section:not(.bannerSection):not(.yearRoundSection):not(:last-child) {
    margin-bottom: 80px;
  }

  .sectionTitle {
    font-size: 42px;
    font-weight: 500;
    color: var(--primary);

    a {
      display: flex;
      align-items: center;
      gap: 10px;
      width: fit-content;

      &::after {
        display: block;
        width: 42px;
        height: 42px;
        background: url(${IconLink.src}) no-repeat center / cover;
        content: "";
      }
    }
  }

  .bannerSection {
    .bannerItem a {
      position: relative;
      width: 100%;
      height: 600px;

      img {
        width: 100%;
      }
    }
  }

  .yearRoundSection {
    padding: 110px 0;
    background: linear-gradient(
      180deg,
      #4774b9 -6.11%,
      rgba(200, 214, 234, 0.6) 57.66%,
      rgba(255, 255, 255, 0) 100%
    );
    overflow: hidden;

    .inner {
      display: flex;
      align-items: center;
      gap: 76px;
    }

    .slider {
      max-width: 1267px;
    }

    .sectionTitle {
      flex-shrink: 0;
    }

    .sliderItem {
      width: 240px;
      padding-right: 40px;
    }
  }

  .findSection {
    .wideInner {
      padding: 70px 0;
      background: url(${BgFindSection.src}) no-repeat center / cover;
    }

    .inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .textWrap {
      p:first-child {
        font-size: 42px;
        font-weight: 500;
        color: var(--black);
      }

      p:last-child {
        margin-top: 15px;
      }
    }

    .img {
      width: 600px;
      aspect-ratio: 600 / 380;
    }

    .sectionTitle {
      color: var(--black);
    }
  }

  .montlySection,
  .mediaSection {
    .sectionTitle {
      margin-bottom: 30px;
    }

    .list {
      display: flex;
      gap: 50px;

      .item {
        width: 200px;
      }
    }
  }

  .behindSection {
    padding-bottom: 80px;
    background: url(${BgBehindSection.src}) no-repeat center bottom / 100% 255px;

    .inner {
      position: relative;
    }

    .sectionTitle {
      position: absolute;
      top: calc(50% - 80px);
      left: 0;
      z-index: 2;
    }

    .behindItem {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .textWrap {
        padding-top: 80px;
        width: 510px;

        .title {
          display: -webkit-box;
          margin-bottom: 15px;
          font-weight: 500;
          line-height: 1.4;
          word-break: break-all;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          text-overflow: ellipsis;
          overflow: hidden;
        }

        .date {
          font-size: 14px;
          color: var(--neutral-300);
        }
      }

      .img {
        flex-shrink: 0;
        position: relative;
        width: 400px;
        aspect-ratio: 1;
      }
    }

    .navigation {
      position: absolute;
      bottom: 0;
      right: 0;
      display: flex;
      z-index: 1;

      button {
        display: block;
        width: 42px;
        height: 42px;
      }
    }
  }

  .noticeSection {
    .inner {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
    }

    .item {
      &:not(:last-child) {
        margin-bottom: 20px;
      }

      a {
        display: flex;
        align-items: center;
        gap: 80px;

        .title {
          width: 720px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .date {
          font-size: 14px;
        }
      }
    }
  }

  .linkSection {
    .inner .linkList {
      display: flex;
    }
  }

  @media (max-width: 1300px) {
    section:not(.bannerSection):not(.yearRoundSection):not(:last-child) {
      margin-bottom: calc(100vw * (80 / 1300));
    }

    .sectionTitle {
      font-size: calc(100vw * (42 / 1300));

      a {
        gap: calc(100vw * (10 / 1300));

        &::after {
          width: calc(100vw * (42 / 1300));
          height: calc(100vw * (42 / 1300));
        }
      }
    }

    .bannerSection {
      .bannerItem a {
        height: calc(100vw * (600 / 1300));
      }
    }

    .yearRoundSection {
      padding: calc(100vw * (110 / 1300)) 0;

      .inner {
        gap: calc(100vw * (76 / 1300));
      }

      .slider {
        max-width: calc(100vw * (1267 / 1300));
      }

      .sliderItem {
        width: calc(100vw * (240 / 1300));
        padding-right: calc(100vw * (40 / 1300));
      }
    }

    .findSection {
      .wideInner {
        padding: calc(100vw * (70 / 1300)) 0;
      }

      .textWrap {
        p:first-child {
          font-size: calc(100vw * (42 / 1300));
        }

        p:last-child {
          margin-top: calc(100vw * (15 / 1300));
        }
      }

      .img {
        width: calc(100vw * (600 / 1300));
      }
    }

    .montlySection,
    .mediaSection {
      .sectionTitle {
        margin-bottom: calc(100vw * (30 / 1300));
      }

      .list {
        gap: calc(100vw * (50 / 1300));

        .item {
          width: calc(100vw * (200 / 1300));
        }
      }
    }

    .behindSection {
      padding-bottom: calc(100vw * (80 / 1300));
      background: url(${BgBehindSection.src}) no-repeat center bottom / 100%
        calc(100vw * (255 / 1300));

      .sectionTitle {
        top: calc(50% - calc(100vw * (80 / 1300)));
      }

      .behindItem {
        .textWrap {
          padding-top: calc(100vw * (80 / 1300));
          width: calc(100vw * (510 / 1300));

          .title {
            margin-bottom: calc(100vw * (15 / 1300));
          }

          .date {
            font-size: calc(100vw * (14 / 1300));
          }
        }

        .img {
          width: calc(100vw * (400 / 1300));
        }
      }

      .navigation {
        button {
          width: calc(100vw * (42 / 1300));
          height: calc(100vw * (42 / 1300));
        }
      }
    }

    .noticeSection {
      .item {
        &:not(:last-child) {
          margin-bottom: calc(100vw * (20 / 1300));
        }

        a {
          gap: calc(100vw * (80 / 1300));

          .title {
            width: calc(100vw * (720 / 1300));
          }

          .date {
            font-size: calc(100vw * (14 / 1300));
          }
        }
      }
    }
  }

  @media (max-width: 767px) {
    section:not(.bannerSection):not(.yearRoundSection):not(:last-child) {
      margin-bottom: calc(100vw * (50 / 375));
    }

    .sectionTitle {
      font-size: calc(100vw * (28 / 375));

      a {
        gap: calc(100vw * (10 / 375));

        &::after {
          width: calc(100vw * (32 / 375));
          height: calc(100vw * (32 / 375));
        }
      }
    }

    .bannerSection {
      .bannerItem a {
        height: calc(100vw * (400 / 375));
      }
    }

    .yearRoundSection {
      padding: calc(100vw * (50 / 375)) 0;
      background: no-repeat top center / 100% calc(100vw * (104 / 375));
      background-image: linear-gradient(
        180deg,
        #4774b9 -6.11%,
        rgba(200, 214, 234, 0.6) 57.66%,
        rgba(255, 255, 255, 0) 100%
      );

      .inner {
        flex-direction: column;
        align-items: flex-start;
        gap: calc(100vw * (20 / 375));
      }

      .slider {
        max-width: 100%;
      }

      .sliderItem {
        width: calc(100vw * (179 / 375));
        padding-right: calc(100vw * (15 / 375));
      }
    }

    .findSection {
      .wideInner {
        padding: calc(100vw * (60 / 375)) calc(100vw * (36 / 375));
        border-radius: 900px;
        overflow: hidden;
      }

      .inner {
        flex-direction: column;
        gap: calc(100vw * (20 / 375));
      }

      .textWrap {
        text-align: center;

        p:first-child {
          font-size: calc(100vw * (28 / 375));
        }

        p:last-child {
          margin-top: calc(100vw * (5 / 375));
        }
      }

      .img {
        width: 100%;
      }
    }

    .montlySection,
    .mediaSection {
      .sectionTitle {
        margin-bottom: calc(100vw * (20 / 375));
      }

      .list {
        flex-wrap: wrap;
        gap: calc(100vw * (20 / 375)) calc(100vw * (15 / 375));

        .item {
          width: calc(100vw * (164 / 375));
        }
      }
    }

    .behindSection {
      padding-bottom: calc(100vw * (60 / 375));
      background: url(${BgBehindSection.src}) no-repeat center bottom / 100%
        calc(100vw * (50 / 375));

      .sectionTitle {
        position: static;
        margin-bottom: calc(100vw * (20 / 375));
      }

      .behindItem {
        flex-direction: column;
        gap: calc(100vw * (20 / 375));

        .textWrap {
          padding-top: 0;
          width: 100%;

          .title {
            margin-bottom: calc(100vw * (10 / 375));
          }

          .date {
            font-size: calc(100vw * (12 / 375));
          }
        }

        .img {
          width: 100%;
        }
      }

      .navigation {
        position: static;
        justify-content: center;
        margin-top: calc(100vw * (20 / 375));

        button {
          width: calc(100vw * (42 / 375));
          height: calc(100vw * (42 / 375));
        }
      }
    }

    .noticeSection {
      .inner {
        flex-direction: column;
        gap: calc(100vw * (20 / 375));
      }

      .list {
        width: 100%;
      }

      .item {
        &:not(:last-child) {
          margin-bottom: calc(100vw * (25 / 375));
        }

        a {
          flex-direction: column;
          align-items: flex-start;
          gap: calc(100vw * (8 / 375));

          .title {
            width: 100%;
          }

          .date {
            font-size: calc(100vw * (12 / 375));
          }
        }
      }
    }

    .linkSection {
      .inner .linkList {
        flex-direction: column;
      }
    }
  }
`;

export { Container };

export default {
  Container,
};
