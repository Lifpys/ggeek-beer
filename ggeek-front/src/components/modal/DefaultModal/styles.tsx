import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  height: 100dvh;
  background: rgba(0, 0, 0, 0.6);
  z-index: 10;

  .modalInner {
    position: relative;
    width: 341px;
    padding: 30px 20px 20px;
    text-align: center;
    word-break: keep-all;
    white-space: pre-wrap;
    background-color: var(--white);

    .title {
      font-size: 16px;
      font-weight: 600;
      color: var(--black);
    }

    .text {
      margin-top: 12px;
      font-size: 14px;
      color: var(--neutral-600);
    }

    .btnWrap {
      display: flex;
      justify-content: center;
      gap: 4px;
      margin-top: 24px;

      button {
        flex: 1 0 0;
      }
    }
  }

  @media (max-width: 1300px) {
    .modalInner {
      width: calc(100vw * (341 / 1300));
      padding: calc(100vw * (30 / 1300)) calc(100vw * (20 / 1300))
        calc(100vw * (20 / 1300));

      .title {
        font-size: calc(100vw * (16 / 1300));
      }

      .text {
        margin-top: calc(100vw * (12 / 1300));
        font-size: calc(100vw * (14 / 1300));
      }

      .btnWrap {
        gap: calc(100vw * (4 / 1300));
        margin-top: calc(100vw * (24 / 1300));
      }
    }
  }

  @media (max-width: 767px) {
    .modalInner {
      width: calc(100vw * (320 / 375));
      padding: calc(100vw * (30 / 375)) calc(100vw * (20 / 375))
        calc(100vw * (20 / 375));

      .title {
        font-size: calc(100vw * (16 / 375));
      }

      .text {
        margin-top: calc(100vw * (12 / 375));
        font-size: calc(100vw * (14 / 375));
      }

      .btnWrap {
        gap: calc(100vw * (4 / 375));
        margin-top: calc(100vw * (24 / 375));
      }
    }
  }
`;

export { Container };

export default { Container };
