import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .total {
    font-size: 14px;
    font-weight: 500;

    span {
      color: var(--primary);
    }
  }

  .input {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 215px;
    padding: 5px 10px;
    border-bottom: 1px solid var(--neutral-600);

    input {
      width: 100%;
      font-size: 14px;

      &::placeholder {
        color: var(--neutral-300);
      }
    }

    .searchBtn {
      flex-shrink: 0;
      display: block;
      width: 18px;
    }
  }

  @media (max-width: 1340px) {
    .total {
      font-size: calc(100vw * (14 / 1300));
    }

    .input {
      gap: calc(100vw * (10 / 1300));
      width: calc(100vw * (215 / 1300));
      padding: calc(100vw * (5 / 1300)) calc(100vw * (10 / 1300));

      input {
        font-size: calc(100vw * (14 / 1300));
      }

      .searchBtn {
        width: calc(100vw * (18 / 1300));
      }
    }
  }

  @media (max-width: 767px) {
    .total {
      font-size: calc(100vw * (14 / 375));
    }

    .input {
      gap: calc(100vw * (10 / 375));
      width: calc(100vw * (173 / 375));
      padding: calc(100vw * (5 / 375)) calc(100vw * (10 / 375));

      input {
        font-size: calc(100vw * (14 / 375));
      }

      .searchBtn {
        width: calc(100vw * (18 / 375));
      }
    }
  }
`;

export { Container };

export default {
  Container,
};
