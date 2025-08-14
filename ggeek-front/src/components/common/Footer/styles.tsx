import styled from "styled-components";

const Container = styled.footer`
  padding: 59px 0 70px;
  font-size: 14px;
  text-align: center;
  border-top: 1px solid var(--neutral-300);

  .infoList {
    display: flex;
    justify-content: center;
    gap: 14px;
    margin: 40px 0 12px;

    .infoItem {
      display: flex;
      gap: 14px;

      &:not(:last-child)::after {
        display: block;
        content: "|";
      }
    }
  }

  .termsList {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 40px;
    font-weight: bold;
  }

  .quickMenuList {
    position: fixed;
    right: 0;
    bottom: 30px;
    width: 132px;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.7);
    z-index: 5;

    .quickMenuItem {
      &:nth-child(3) a {
        color: #ffbb00;
      }

      &:not(:last-child) {
        margin-bottom: 20px;
      }

      a,
      button {
        width: 100%;
        font-size: 14px;
        text-align: right;
        font-weight: 500;
      }

      a {
        color: var(--black);
      }

      button {
        color: var(--primary);
      }
    }
  }

  @media (max-width: 1300px) {
    padding: calc(100vw * (59 / 1300)) 0 calc(100vw * (70 / 1300));
    font-size: calc(100vw * (14 / 1300));

    .infoList {
      gap: calc(100vw * (14 / 1300));
      margin: calc(100vw * (40 / 1300)) 0 calc(100vw * (12 / 1300));

      .infoItem {
        gap: calc(100vw * (14 / 1300));
      }
    }

    .termsList {
      gap: calc(100vw * (20 / 1300));
      margin-top: calc(100vw * (40 / 1300));
    }

    .quickMenuList {
      bottom: calc(100vw * (30 / 1300));
      width: calc(100vw * (132 / 1300));
      padding: calc(100vw * (20 / 1300));

      .quickMenuItem {
        &:not(:last-child) {
          margin-bottom: calc(100vw * (20 / 1300));
        }

        a,
        button {
          font-size: calc(100vw * (14 / 1300));
        }
      }
    }
  }

  @media (max-width: 767px) {
    padding: calc(100vw * (40 / 375)) 0 calc(100vw * (50 / 375));
    font-size: calc(100vw * (14 / 375));

    .infoList {
      flex-direction: column;
      align-items: center;
      gap: calc(100vw * (14 / 375));
      margin: calc(100vw * (30 / 375)) 0 calc(100vw * (12 / 375));

      .infoItem {
        gap: 0;

        &:not(:last-child)::after {
          display: none;
        }
      }
    }

    .copyright {
      letter-spacing: -0.0313em;
    }

    .termsList {
      gap: calc(100vw * (20 / 375));
      margin-top: calc(100vw * (30 / 375));
    }

    .quickMenuList {
      bottom: calc(100vw * (10 / 375));
      width: calc(100vw * (110 / 375));
      padding: calc(100vw * (15 / 375)) calc(100vw * (8 / 375));

      .quickMenuItem {
        &:not(:last-child) {
          margin-bottom: calc(100vw * (20 / 375));
        }

        a,
        button {
          font-size: calc(100vw * (14 / 375));
        }
      }
    }
  }
`;

export { Container };

export default {
  Container,
};
