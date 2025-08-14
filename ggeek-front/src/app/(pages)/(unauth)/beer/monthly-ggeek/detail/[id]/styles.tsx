import styled from "styled-components";

const Container = styled.div`
  padding-top: 40px;

  .productWrap {
    display: flex;
    align-items: center;
    gap: 60px;
    margin-bottom: 80px;

    .img {
      flex-shrink: 0;
      position: relative;
      width: 580px;
      aspect-ratio: 1;
      background-color: var(--neutral-50);
    }

    .info {
      flex: 1;

      .enTitle {
        margin-bottom: 15px;
        font-size: 42px;
        font-weight: 500;
        color: var(--black);
      }

      .title {
        margin-bottom: 40px;
        font-size: 24px;
        color: var(--black);
      }

      .detailList {
        margin-bottom: 40px;

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
        margin-bottom: 40px;

        .descTitle {
          margin-bottom: 15px;
          font-weight: 500;
        }
      }

      .btnWrap {
        display: flex;
        gap: 5px;
      }
    }
  }

  .relateWrap {
    .relateTitle {
      margin-bottom: 30px;
      font-size: 42px;
      font-weight: 500;
      color: var(--primary);
    }

    .relateList {
      display: flex;
      flex-wrap: wrap;
      gap: 50px;

      .relateItem {
        width: 200px;
      }
    }
  }

  @media (max-width: 1300px) {
    padding-top: calc(100vw * (40 / 1300));

    .productWrap {
      gap: calc(100vw * (60 / 1300));
      margin-bottom: calc(100vw * (80 / 1300));

      .img {
        width: calc(100vw * (580 / 1300));
      }

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
          margin-bottom: calc(100vw * (40 / 1300));

          .descTitle {
            margin-bottom: calc(100vw * (15 / 1300));
          }
        }

        .btnWrap {
          gap: calc(100vw * (5 / 1300));
        }
      }
    }

    .relateWrap {
      .relateTitle {
        margin-bottom: calc(100vw * (30 / 1300));
        font-size: calc(100vw * (42 / 1300));
      }

      .relateList {
        gap: calc(100vw * (50 / 1300));

        .relateItem {
          width: calc(100vw * (200 / 1300));
        }
      }
    }
  }

  @media (max-width: 767px) {
    padding-top: calc(100vw * (10 / 375));

    .productWrap {
      flex-direction: column;
      gap: calc(100vw * (20 / 375));
      margin-bottom: calc(100vw * (50 / 375));

      .img {
        width: 100%;
      }

      .info {
        .enTitle {
          margin-bottom: calc(100vw * (15 / 375));
          font-size: calc(100vw * (28 / 375));
        }

        .title {
          margin-bottom: calc(100vw * (30 / 375));
          font-size: calc(100vw * (18 / 375));
        }

        .detailList {
          margin-bottom: calc(100vw * (30 / 375));

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
          margin-bottom: calc(100vw * (40 / 375));

          .descTitle {
            margin-bottom: calc(100vw * (10 / 375));
          }
        }

        .btnWrap {
          gap: calc(100vw * (5 / 375));
        }
      }
    }

    .relateWrap {
      .relateTitle {
        margin-bottom: calc(100vw * (20 / 375));
        font-size: calc(100vw * (28 / 375));
      }

      .relateList {
        gap: calc(100vw * (20 / 375)) calc(100vw * (15 / 375));

        .relateItem {
          width: calc(100vw * (164 / 375));
        }
      }
    }
  }
`;

export { Container };

export default {
  Container,
};
