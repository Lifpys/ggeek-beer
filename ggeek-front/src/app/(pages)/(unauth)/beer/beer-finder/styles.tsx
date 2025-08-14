import styled from "styled-components";
//img
import BgBeerFinder from "@/assets/image/beer/bg_beer_finder.png";
import BgBeerFinderMb from "@/assets/image/beer/bg_beer_finder_mb.png";

const Container = styled.div`
  .selectTitle {
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: 500;
    color: var(--primary);
  }

  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .item {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 265px;
      font-size: 18px;
      font-weight: 500;
      color: var(--black);
      transition: all 0.3s ease;

      &:hover,
      &:has(input:checked) {
        color: var(--primary);
      }

      &:has(input:checked) {
        box-shadow: var(--inner-shadow);
      }

      .img {
        position: relative;
        width: 120px;
        margin-bottom: 20px;
        aspect-ratio: 1;
      }

      .enTitle {
        margin-top: 8px;
      }

      label {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        cursor: pointer;
      }
    }
  }

  .tasteSelect {
    margin-bottom: 40px;

    .list {
      gap: 25px;
    }

    .item {
      width: 220px;
      background-color: var(--brown);
    }
  }

  .foodSelect {
    .list {
      gap: 24px;
    }

    .item {
      width: 180px;
      background-color: var(--brown-light);
    }
  }

  .recommendBtn {
    width: 178px;
    margin: 40px auto 0;
  }

  .result {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 130px 0 -130px;
    padding: 260px 0 130px;
    color: var(--white);

    &::before {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 100vw;
      height: 100%;
      background: url(${BgBeerFinder.src}) no-repeat center / cover;
      content: "";
      z-index: -1;
    }

    .textWrap {
      .title {
        margin-bottom: 20px;
        font-size: 32px;
        font-weight: 500;
        white-space: pre-wrap;
      }

      .selectedList {
        display: flex;
        gap: 40px;
        margin-bottom: 20px;

        .selectedItem {
          display: flex;
          gap: 10px;
          font-size: 18px;
        }
      }

      .resetBtn {
        width: 151px;
      }
    }

    .productList {
      display: flex;
      gap: 30px;

      .item {
        width: 250px;
      }
    }
  }

  @media (max-width: 1300px) {
    .selectTitle {
      margin-bottom: calc(100vw * (20 / 1300));
      font-size: calc(100vw * (24 / 1300));
    }

    .list {
      .item {
        height: calc(100vw * (265 / 1300));
        font-size: calc(100vw * (18 / 1300));

        .img {
          width: calc(100vw * (120 / 1300));
          margin-bottom: calc(100vw * (20 / 1300));
        }

        .enTitle {
          margin-top: calc(100vw * (8 / 1300));
        }
      }
    }

    .tasteSelect {
      margin-bottom: calc(100vw * (40 / 1300));

      .list {
        gap: calc(100vw * (25 / 1300));
      }

      .item {
        width: calc(100vw * (220 / 1300));
      }
    }

    .foodSelect {
      .list {
        gap: calc(100vw * (24 / 1300));
      }

      .item {
        width: calc(100vw * (180 / 1300));
      }
    }

    .recommendBtn {
      width: calc(100vw * (178 / 1300));
      margin: calc(100vw * (40 / 1300)) auto 0;
    }

    .result {
      margin: calc(100vw * (130 / 1300)) 0 calc(100vw * (-130 / 1300));
      padding: calc(100vw * (260 / 1300)) 0 calc(100vw * (130 / 1300));

      .textWrap {
        .title {
          margin-bottom: calc(100vw * (20 / 1300));
          font-size: calc(100vw * (32 / 1300));
        }

        .selectedList {
          gap: calc(100vw * (40 / 1300));
          margin-bottom: calc(100vw * (20 / 1300));

          .selectedItem {
            gap: calc(100vw * (10 / 1300));
            font-size: calc(100vw * (18 / 1300));
          }
        }

        .resetBtn {
          width: calc(100vw * (151 / 1300));
        }
      }

      .productList {
        gap: calc(100vw * (30 / 1300));

        .item {
          width: calc(100vw * (250 / 1300));
        }
      }
    }
  }

  @media (max-width: 767px) {
    .selectTitle {
      margin-bottom: calc(100vw * (10 / 375));
      font-size: calc(100vw * (18 / 375));
    }

    .list {
      .item {
        height: calc(100vw * (130 / 375));
        font-size: calc(100vw * (14 / 375));

        .img {
          width: calc(100vw * (60 / 375));
          margin-bottom: calc(100vw * (5 / 375));
        }

        .enTitle {
          margin-top: calc(100vw * (3 / 375));
        }
      }
    }

    .tasteSelect {
      margin-bottom: calc(100vw * (40 / 375));

      .list {
        gap: calc(100vw * (20 / 375)) calc(100vw * (9 / 375));
      }

      .item {
        width: calc(100vw * (108 / 375));
      }
    }

    .foodSelect {
      .list {
        gap: calc(100vw * (10 / 375)) calc(100vw * (9 / 375));
      }

      .item {
        width: calc(100vw * (108 / 375));
      }
    }

    .recommendBtn {
      width: calc(100vw * (178 / 375));
      margin: calc(100vw * (30 / 375)) auto 0;
    }

    .result {
      flex-direction: column;
      align-items: flex-start;
      gap: calc(100vw * (30 / 375));
      margin: calc(100vw * (130 / 375)) 0 calc(100vw * (-130 / 375));
      padding: calc(100vw * (90 / 375)) 0 calc(100vw * (100 / 375));

      &::before {
        background-image: url(${BgBeerFinderMb.src});
      }

      .textWrap {
        .title {
          margin-bottom: calc(100vw * (15 / 375));
          font-size: calc(100vw * (24 / 375));
        }

        .selectedList {
          gap: calc(100vw * (40 / 375));
          margin-bottom: calc(100vw * (15 / 375));

          .selectedItem {
            gap: calc(100vw * (10 / 375));
            font-size: calc(100vw * (16 / 375));
          }
        }

        .resetBtn {
          width: calc(100vw * (151 / 375));
        }
      }

      .productList {
        flex-wrap: wrap;
        gap: calc(100vw * (20 / 375)) calc(100vw * (15 / 375));

        .item {
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
