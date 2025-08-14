import styled from "styled-components";

const Container = styled.div`
  .searchWrap {
    margin-bottom: 30px;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
    gap: 60px 66px;

    &.noticeList {
      gap: 30px 36px;

      .item {
        width: calc((100% - 72px) / 3);
      }

      .notice {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 167px;
        padding: 0 30px;
        background-color: var(--neutral-50);

        .title {
          display: -webkit-box;
          margin-bottom: 10px;
          font-size: 18px;
          font-weight: 500;
          line-height: 1.4;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .date {
          font-size: 14px;
        }
      }
    }
  }

  .pagination {
    margin-top: 40px;
  }

  @media (max-width: 1300px) {
    .searchWrap {
      margin-bottom: calc(100vw * (30 / 1300));
    }

    .list {
      gap: calc(100vw * (60 / 1300)) calc(100vw * (66 / 1300));

      &.noticeList {
        gap: calc(100vw * (30 / 1300)) calc(100vw * (36 / 1300));

        .item {
          width: calc((100% - calc(100vw * (72 / 1300))) / 3);
        }

        .notice {
          height: calc(100vw * (167 / 1300));
          padding: 0 calc(100vw * (30 / 1300));

          .title {
            margin-bottom: calc(100vw * (10 / 1300));
            font-size: calc(100vw * (18 / 1300));
          }

          .date {
            font-size: calc(100vw * (14 / 1300));
          }
        }
      }
    }
    .pagination {
      margin-top: calc(100vw * (40 / 1300));
    }
  }

  @media (max-width: 767px) {
    .searchWrap {
      margin-bottom: calc(100vw * (30 / 375));
    }

    .list {
      gap: calc(100vw * (20 / 375)) calc(100vw * (15 / 375));

      .item {
        width: calc(100vw * (164 / 375));
      }

      &.noticeList {
        gap: calc(100vw * (10 / 375));

        .item {
          width: 100%;
        }

        .notice {
          height: calc(100vw * (144 / 375));
          padding: 0 calc(100vw * (20 / 375));

          .title {
            margin-bottom: calc(100vw * (10 / 375));
            font-size: calc(100vw * (16 / 375));
          }

          .date {
            font-size: calc(100vw * (12 / 375));
          }
        }
      }
    }
    .pagination {
      margin-top: calc(100vw * (30 / 375));
    }
  }
`;

export { Container };

export default {
  Container,
};
