import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  height: 100dvh;
  background: rgba(0, 0, 0, 0.6);
  z-index: 10;

  .modalInner {
    display: flex;
    align-items: flex-end;
    gap: 30px;
    width: 1024px;
    padding: 20px;
    background-color: var(--white);

    .img {
      flex-shrink: 0;
      position: relative;
      width: 486px;
      aspect-ratio: 1/1;
    }

    .detail {
      flex: 1;
      display: flex;
      flex-direction: column;
      min-width: 0;
      height: 466px;
      word-break: break-all;
      white-space: pre-wrap;

      .textWrap {
        flex: 1;
        overflow: auto;

        .title {
          margin-bottom: 20px;
          font-weight: 600;
          color: var(--black);
        }

        .desc {
          font-size: 14px;
        }
      }

      .btnWrap {
        display: flex;
        gap: 10px;
        margin-top: 20px;
      }
    }
  }

  .closeBtn {
    margin-top: 15px;
    font-size: 14px;
    font-weight: 500;
    color: var(--white);
  }

  @media (max-width: 1300px) {
    .modalInner {
      gap: calc(100vw * (30 / 1300));
      width: calc(100vw * (1024 / 1300));
      padding: calc(100vw * (20 / 1300));

      .img {
        width: calc(100vw * (486 / 1300));
      }

      .detail {
        height: calc(100vw * (466 / 1300));

        .textWrap {
          .title {
            margin-bottom: calc(100vw * (20 / 1300));
          }

          .desc {
            font-size: calc(100vw * (14 / 1300));
          }
        }

        .btnWrap {
          gap: calc(100vw * (10 / 1300));
          margin-top: calc(100vw * (20 / 1300));
        }
      }
    }

    .closeBtn {
      margin-top: calc(100vw * (15 / 1300));
      font-size: calc(100vw * (14 / 1300));
    }
  }

  @media (max-width: 767px) {
    .modalInner {
      flex-direction: column;
      gap: calc(100vw * (18 / 375));
      width: calc(100vw * (320 / 375));
      height: calc(100vw * (602 / 375));
      padding: calc(100vw * (15 / 375));

      .img {
        width: 100%;
      }

      .detail {
        height: calc(100vw * (202 / 375));

        .textWrap {
          .title {
            margin-bottom: calc(100vw * (20 / 375));
            font-size: calc(100vw * (16 / 375));
          }

          .desc {
            font-size: calc(100vw * (14 / 375));
          }
        }

        .btnWrap {
          gap: calc(100vw * (10 / 375));
          margin-top: calc(100vw * (20 / 375));
        }
      }
    }

    .closeBtn {
      margin-top: calc(100vw * (10 / 375));
      font-size: calc(100vw * (14 / 375));
    }
  }
`;

export { Container };

export default { Container };
