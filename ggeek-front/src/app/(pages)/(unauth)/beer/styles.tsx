import styled from "styled-components";

const Container = styled.main`
  .tab {
    margin-bottom: 60px;
  }

  .sectionTitle {
    display: flex;
    gap: 40px;
    align-items: flex-end;
    margin-bottom: 60px;
    word-break: keep-all;
    white-space: pre-wrap;
    line-height: 1.5;

    h2 {
      font-size: 24px;
      font-weight: 600;
      color: var(--primary);
    }

    p {
      font-size: 14px;
    }
  }

  .categoryTab {
    margin-bottom: 30px;
  }

  .pagination {
    margin-top: 40px;
  }

  @media (max-width: 1300px) {
    .tab {
      margin-bottom: calc(100vw * (60 / 1300));
    }

    .sectionTitle {
      gap: calc(100vw * (40 / 1300));
      margin-bottom: calc(100vw * (60 / 1300));

      h2 {
        font-size: calc(100vw * (24 / 1300));
      }

      p {
        font-size: calc(100vw * (14 / 1300));
      }
    }

    .categoryTab {
      margin-bottom: calc(100vw * (30 / 1300));
    }

    .pagination {
      margin-top: calc(100vw * (40 / 1300));
    }
  }

  @media (max-width: 767px) {
    .tab {
      margin-bottom: calc(100vw * (40 / 375));
    }

    .sectionTitle {
      flex-direction: column;
      align-items: flex-start;
      gap: calc(100vw * (15 / 375));
      margin-bottom: calc(100vw * (40 / 375));

      h2 {
        font-size: calc(100vw * (18 / 375));
      }

      p {
        font-size: calc(100vw * (14 / 375));
      }
    }

    .categoryTab {
      margin-bottom: calc(100vw * (30 / 375));
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
