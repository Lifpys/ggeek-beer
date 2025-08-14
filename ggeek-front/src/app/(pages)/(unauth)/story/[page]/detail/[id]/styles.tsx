import styled from "styled-components";

const Container = styled.div`
  .titleWrap {
    margin-bottom: 30px;
    padding-bottom: 30px;
    border-bottom: 1px solid var(--neutral-600);

    .date {
      margin-bottom: 10px;
      font-size: 14px;
    }

    .title {
      font-size: 24px;
      font-weight: 500;
      color: var(--black);
      word-break: break-all;
      line-height: 1.4;
    }
  }

  .fileList {
    margin-top: 40px;
    padding: 30px;
    background-color: var(--blue);

    .fileItem {
      display: flex;
      align-items: center;
      gap: 20px;
      font-size: 14px;

      &:not(:last-child) {
        margin-bottom: 15px;
      }

      a {
        flex-shrink: 0;
        color: var(--primary);
        text-decoration: underline;
        text-underline-offset: 2px;
      }

      .fileName {
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }

  .listBtn {
    margin: 40px auto 0;
    width: 148px;
  }

  @media (max-width: 1300px) {
    .titleWrap {
      margin-bottom: calc(100vw * (30 / 1300));
      padding-bottom: calc(100vw * (30 / 1300));

      .date {
        margin-bottom: calc(100vw * (10 / 1300));
        font-size: calc(100vw * (14 / 1300));
      }

      .title {
        font-size: calc(100vw * (24 / 1300));
      }
    }

    .fileList {
      margin-top: calc(100vw * (40 / 1300));
      padding: calc(100vw * (30 / 1300));

      .fileItem {
        gap: calc(100vw * (20 / 1300));
        font-size: calc(100vw * (14 / 1300));

        &:not(:last-child) {
          margin-bottom: calc(100vw * (15 / 1300));
        }

        a {
          text-underline-offset: calc(100vw * (2 / 1300));
        }
      }
    }

    .listBtn {
      margin: calc(100vw * (40 / 1300)) auto 0;
      width: calc(100vw * (148 / 1300));
    }
  }

  @media (max-width: 767px) {
    .titleWrap {
      margin-bottom: calc(100vw * (20 / 375));
      padding-bottom: calc(100vw * (20 / 375));

      .date {
        margin-bottom: calc(100vw * (10 / 375));
        font-size: calc(100vw * (12 / 375));
      }

      .title {
        font-size: calc(100vw * (18 / 375));
      }
    }

    .fileList {
      margin-top: calc(100vw * (30 / 375));
      padding: calc(100vw * (30 / 375)) calc(100vw * (20 / 375));

      .fileItem {
        gap: calc(100vw * (15 / 375));
        font-size: calc(100vw * (14 / 375));

        &:not(:last-child) {
          margin-bottom: calc(100vw * (15 / 375));
        }

        a {
          text-underline-offset: calc(100vw * (2 / 375));
        }
      }
    }

    .listBtn {
      margin: calc(100vw * (20 / 375)) auto 0;
      width: calc(100vw * (148 / 375));
    }
  }
`;

export { Container };

export default {
  Container,
};
