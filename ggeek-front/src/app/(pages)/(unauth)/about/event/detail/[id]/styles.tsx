import styled from "styled-components";

const Container = styled.div`
  border: 1px solid var(--primary);

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64px;
    padding: 0 10px 0 20px;
    font-size: 24px;
    font-weight: 600;
    color: var(--white);
    background-color: var(--primary);

    .reSelectDateBtn {
      width: 178px;
    }
  }

  .scheduleList {
    padding: 20px 25px;

    .scheduleItem:not(:last-child) {
      margin-bottom: 60px;
    }
  }

  @media (max-width: 1300px) {
    .top {
      height: calc(100vw * (64 / 1300));
      padding: 0 calc(100vw * (10 / 1300)) 0 calc(100vw * (20 / 1300));
      font-size: calc(100vw * (24 / 1300));

      .reSelectDateBtn {
        width: calc(100vw * (178 / 1300));
      }
    }

    .scheduleList {
      padding: calc(100vw * (20 / 1300)) calc(100vw * (25 / 1300));

      .scheduleItem:not(:last-child) {
        margin-bottom: calc(100vw * (60 / 1300));
      }
    }
  }

  @media (max-width: 767px) {
    .top {
      height: calc(100vw * (57 / 375));
      padding: 0 calc(100vw * (10 / 375));
      font-size: calc(100vw * (18 / 375));

      .reSelectDateBtn {
        width: calc(100vw * (129 / 375));
      }
    }

    .scheduleList {
      padding: calc(100vw * (20 / 375)) calc(100vw * (10 / 375));

      .scheduleItem:not(:last-child) {
        margin-bottom: calc(100vw * (40 / 375));
      }
    }
  }
`;

export { Container };

export default {
  Container,
};
