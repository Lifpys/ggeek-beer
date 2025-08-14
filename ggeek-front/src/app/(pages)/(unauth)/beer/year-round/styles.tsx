import styled from "styled-components";
//img
import BgYearRound from "@/assets/image/beer/bg_year_round.png";
import BgYearRoundMb from "@/assets/image/beer/bg_year_round_mb.png";

const Container = styled.div`
  .productWrap {
    display: flex;
    align-items: center;
    gap: 60px;
    height: 704px;
    padding: 112px 100px;
    background: url(${BgYearRound.src}) no-repeat center / cover;

    .img {
      flex-shrink: 0;
      position: relative;
      height: 100%;
      aspect-ratio: 1;
      background-color: var(--neutral-50);
    }

    .info {
      flex: 1;
      height: 100%;
      overflow: auto;

      &::-webkit-scrollbar {
        display: none;
      }

      .enTitle {
        margin-bottom: 15px;
        font-size: 42px;
        font-weight: 500;
        color: var(--white);
      }

      .title {
        margin-bottom: 40px;
        font-size: 24px;
        color: var(--white);
      }

      .detailList {
        margin-bottom: 40px;
        color: var(--neutral-100);

        .detailItem {
          display: flex;
          gap: 20px;

          &:not(:last-child) {
            margin-bottom: 15px;
          }

          .detailTitle {
            flex-shrink: 0;
            width: 110px;
            font-weight: 500;
          }
        }
      }

      .desc {
        color: var(--neutral-100);

        .descTitle {
          margin-bottom: 15px;
          font-weight: 500;
        }
      }
    }

    .emptyText {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      font-weight: 500;
      color: var(--white);
    }
  }

  @media (max-width: 1300px) {
    .productWrap {
      gap: calc(100vw * (60 / 1300));
      height: calc(100vw * (704 / 1300));
      padding: calc(100vw * (112 / 1300)) calc(100vw * (100 / 1300));

      .info {
        .enTitle {
          margin-bottom: calc(100vw * (15 / 1300));
          font-size: calc(100vw * (42 / 1300));
        }

        .title {
          margin-bottom: calc(100vw * (40 / 1300));
          font-size: calc(100vw * (24 / 1300));
        }

        .detailList {
          margin-bottom: calc(100vw * (40 / 1300));

          .detailItem {
            gap: calc(100vw * (20 / 1300));

            &:not(:last-child) {
              margin-bottom: calc(100vw * (15 / 1300));
            }

            .detailTitle {
              width: calc(100vw * (110 / 1300));
            }
          }
        }

        .desc {
          .descTitle {
            margin-bottom: calc(100vw * (15 / 1300));
          }
        }
      }
    }
  }

  @media (max-width: 767px) {
    .productWrap {
      flex-direction: column;
      gap: calc(100vw * (20 / 375));
      height: calc(100vw * (681 / 375));
      padding: calc(100vw * (30 / 375)) calc(100vw * (30 / 375))
        calc(100vw * (50 / 375));
      background-image: url(${BgYearRoundMb.src});

      .img {
        width: 100%;
        height: auto;
      }

      .info {
        height: auto;

        .enTitle {
          margin-bottom: calc(100vw * (10 / 375));
          font-size: calc(100vw * (28 / 375));
        }

        .title {
          margin-bottom: calc(100vw * (20 / 375));
          font-size: calc(100vw * (18 / 375));
        }

        .detailList {
          margin-bottom: calc(100vw * (20 / 375));

          .detailItem {
            gap: calc(100vw * (20 / 375));

            &:not(:last-child) {
              margin-bottom: calc(100vw * (10 / 375));
            }

            .detailTitle {
              width: calc(100vw * (100 / 375));
            }
          }
        }

        .desc {
          .descTitle {
            margin-bottom: calc(100vw * (10 / 375));
          }
        }
      }
    }
  }
`;

export { Container };

export default {
  Container,
};
