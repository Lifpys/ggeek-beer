import styled from "styled-components";

const Container = styled.div`
  .titleWrap {
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid var(--neutral-600);

    .date {
      margin-bottom: 10px;
      font-size: 14px;
    }

    .title {
      font-size: 24px;
      font-weight: 500;
      line-height: 1.4;
      color: var(--black);
    }
  }

  .editor {
    height: 100%;
    max-height: 450px;
    overflow: hidden;

    &.more {
      max-height: none;
    }
  }

  .moreViewBtn {
    width: 163px;
    margin: 20px auto 0;
  }

  @media (max-width: 1300px) {
    .titleWrap {
      margin-bottom: calc(100vw * (20 / 1300));
      padding-bottom: calc(100vw * (20 / 1300));

      .date {
        margin-bottom: calc(100vw * (10 / 1300));
        font-size: calc(100vw * (14 / 1300));
      }

      .title {
        font-size: calc(100vw * (24 / 1300));
      }
    }

    .editor {
      max-height: calc(100vw * (450 / 1300));
    }

    .moreViewBtn {
      width: calc(100vw * (163 / 1300));
      margin: calc(100vw * (20 / 1300)) auto 0;
    }
  }

  @media (max-width: 767px) {
    .titleWrap {
      margin-bottom: calc(100vw * (20 / 375));
      padding-bottom: calc(100vw * (20 / 375));

      .date {
        margin-bottom: calc(100vw * (10 / 375));
        font-size: calc(100vw * (14 / 375));
      }

      .title {
        font-size: calc(100vw * (18 / 375));
      }
    }

    .editor {
      max-height: calc(100vw * (202 / 375));
    }

    .moreViewBtn {
      width: calc(100vw * (163 / 375));
      margin: calc(100vw * (20 / 375)) auto 0;
    }
  }
`;

export { Container };

export default {
  Container,
};
