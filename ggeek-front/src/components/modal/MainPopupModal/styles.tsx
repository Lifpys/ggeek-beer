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
    width: 700px;
  }

  .editorWrap {
    margin-bottom: 20px;
  }

  .btnWrap {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .closeBtn {
      font-size: 14px;
      color: var(--white);
    }
  }

  @media (max-width: 1300px) {
    .modalInner {
      width: calc(100vw * (700 / 1300));
    }

    .editorWrap {
      margin-bottom: calc(100vw * (20 / 1300));
    }

    .btnWrap {
      .closeBtn {
        font-size: calc(100vw * (14 / 1300));
      }
    }
  }

  @media (max-width: 767px) {
    .modalInner {
      width: calc(100vw * (320 / 375));
    }

    .editorWrap {
      margin-bottom: calc(100vw * (15 / 375));
    }

    .btnWrap {
      .closeBtn {
        font-size: calc(100vw * (14 / 375));
      }
    }
  }
`;

export { Container };

export default { Container };
