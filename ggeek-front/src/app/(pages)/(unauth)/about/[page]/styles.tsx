import styled from "styled-components";

const Container = styled.div`
  .imgWrap {
    display: grid;
    grid-template-columns: 803px auto;
    gap: 35px 40px;
    height: 535px;
    margin-bottom: 60px;

    &.pub .imgItem:first-child {
      grid-row: 1 / 3;
    }

    .imgItem {
      position: relative;
    }
  }

  .address {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 30px;
    font-size: 24px;
    font-weight: 600;
    color: var(--primary);

    .icon {
      width: 24px;
    }
  }

  .map {
    height: 400px;
    margin-bottom: 50px;
    background-color: var(--blue);
  }

  .info {
    display: flex;
    align-items: center;
    gap: 70px;

    > div {
      display: flex;
      align-items: center;
      gap: 25px;
    }

    .time {
      width: 462px;
    }

    .title {
      flex-shrink: 0;
      display: flex;
      align-items: center;
      width: fit-content;
      height: 38px;
      padding: 0 20px;
      font-weight: bold;
      color: var(--white);
      background-color: var(--primary);
      border-radius: 500px;
    }

    .text,
    .contactList {
      font-size: 18px;
    }

    .contactItem:not(:last-child) {
      margin-bottom: 12px;
    }
  }

  @media (max-width: 1300px) {
    .imgWrap {
      grid-template-columns: calc(100vw * (803 / 1300)) auto;
      gap: calc(100vw * (35 / 1300)) calc(100vw * (40 / 1300));
      height: calc(100vw * (535 / 1300));
      margin-bottom: calc(100vw * (60 / 1300));
    }

    .address {
      gap: calc(100vw * (10 / 1300));
      margin-bottom: calc(100vw * (30 / 1300));
      font-size: calc(100vw * (24 / 1300));

      .icon {
        width: calc(100vw * (24 / 1300));
      }
    }

    .map {
      height: calc(100vw * (400 / 1300));
      margin-bottom: calc(100vw * (50 / 1300));
    }

    .info {
      gap: calc(100vw * (70 / 1300));

      > div {
        gap: calc(100vw * (25 / 1300));
      }

      .time {
        width: calc(100vw * (462 / 1300));
      }

      .title {
        height: calc(100vw * (38 / 1300));
        padding: 0 calc(100vw * (20 / 1300));
      }

      .text,
      .contactList {
        font-size: calc(100vw * (18 / 1300));
      }

      .contactItem:not(:last-child) {
        margin-bottom: calc(100vw * (12 / 1300));
      }
    }
  }

  @media (max-width: 767px) {
    .imgWrap {
      grid-template-columns: calc(100vw * (230 / 375)) auto;
      gap: calc(100vw * (10 / 375)) calc(100vw * (9 / 375));
      height: calc(100vw * (153 / 375));
      margin-bottom: calc(100vw * (40 / 375));
    }

    .address {
      flex-direction: column;
      align-items: flex-start;
      gap: calc(100vw * (10 / 375));
      margin-bottom: calc(100vw * (20 / 375));
      font-size: calc(100vw * (18 / 375));

      .icon {
        width: calc(100vw * (24 / 375));
      }
    }

    .map {
      height: calc(100vw * (190 / 375));
      margin-bottom: calc(100vw * (20 / 375));
    }

    .info {
      flex-direction: column;
      align-items: flex-start;
      gap: calc(100vw * (30 / 375));

      > div {
        flex-direction: column;
        align-items: flex-start;
        gap: calc(100vw * (10 / 375));
      }

      .time {
        width: 100%;
      }

      .title {
        height: calc(100vw * (34 / 375));
        padding: 0 calc(100vw * (15 / 375));
      }

      .text,
      .contactList {
        font-size: calc(100vw * (16 / 375));
      }

      .contactItem:not(:last-child) {
        margin-bottom: calc(100vw * (8 / 375));
      }
    }
  }
`;

export { Container };

export default {
  Container,
};
