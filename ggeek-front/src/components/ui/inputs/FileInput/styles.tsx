import styled from "styled-components";

const Container = styled.div`
  .labelText {
    margin-bottom: 6px;
    font-size: 14px;
    font-weight: 500;
  }

  .fileWrap {
    display: flex;
    align-items: center;
    gap: 10px;
    height: 50px;
    padding: 0 20px;
    font-size: 14px;
    background-color: var(--neutral-50);

    label,
    .deleteBtn {
      color: var(--primary);
      text-decoration: underline;
      text-underline-offset: 2px;
      cursor: pointer;
    }

    .fileName {
      color: var(--neutral-300);

      &.on {
        color: var(--black);
      }
    }
  }

  @media (max-width: 1300px) {
    .labelText {
      margin-bottom: calc(100vw * (6 / 1300));
      font-size: calc(100vw * (14 / 1300));
    }

    .fileWrap {
      gap: calc(100vw * (10 / 1300));
      height: calc(100vw * (50 / 1300));
      padding: 0 calc(100vw * (20 / 1300));
      font-size: calc(100vw * (14 / 1300));

      label,
      .deleteBtn {
        text-underline-offset: calc(100vw * (2 / 1300));
      }
    }
  }

  @media (max-width: 767px) {
    .labelText {
      margin-bottom: calc(100vw * (6 / 375));
      font-size: calc(100vw * (14 / 375));
    }

    .fileWrap {
      gap: calc(100vw * (10 / 375));
      height: calc(100vw * (50 / 375));
      padding: 0 calc(100vw * (20 / 375));
      font-size: calc(100vw * (14 / 375));
      word-break: keep-all;

      label,
      .deleteBtn {
        flex-shrink: 0;
        text-underline-offset: calc(100vw * (2 / 375));
      }
    }
  }
`;

export { Container };

export default {
  Container,
};
