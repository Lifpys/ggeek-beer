import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 14px;

  .prevBtn,
  .nextBtn {
    display: block;
    width: 24px;
  }

  .paginationWrap {
    display: flex;
    gap: 5px;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 34px;
      height: 34px;
      font-size: 16px;
      font-weight: 600;
      color: var(--neutral-300);

      &.on {
        color: var(--white);
        background-color: var(--primary);
      }
    }
  }

  @media (max-width: 1300px) {
    gap: calc(100vw * (14 / 1300));

    .prevBtn,
    .nextBtn {
      width: calc(100vw * (24 / 1300));
    }

    .paginationWrap {
      gap: calc(100vw * (5 / 1300));

      button {
        width: calc(100vw * (34 / 1300));
        height: calc(100vw * (34 / 1300));
        font-size: calc(100vw * (16 / 1300));
      }
    }
  }

  @media (max-width: 767px) {
    gap: calc(100vw * (14 / 375));

    .prevBtn,
    .nextBtn {
      width: calc(100vw * (24 / 375));
    }

    .paginationWrap {
      gap: calc(100vw * (5 / 375));

      button {
        width: calc(100vw * (34 / 375));
        height: calc(100vw * (34 / 375));
        font-size: calc(100vw * (16 / 375));
      }
    }
  }
`;

export { Container };

export default { Container };
