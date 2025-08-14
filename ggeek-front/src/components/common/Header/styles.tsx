import styled from "styled-components";

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0 50px;
  color: var(--primary);
  transition: all 0.2s ease;
  z-index: 8;

  &.main {
    color: var(--white);
    background-color: transparent;
    border-color: transparent;

    .wideInner .langBtnWrap .langBtn,
    .wideInner .menuBtn {
      filter: var(--white-filter);
    }
  }

  &.bg {
    background-color: var(--white);
  }

  .wideInner {
    display: flex;
    align-items: center;
    height: 72px;

    .logo {
      width: 41px;
    }

    .menuList {
      display: flex;
      gap: 45px;
      margin-left: auto;
      font-size: 16px;
      font-weight: 500;

      .menuItem {
        position: relative;
        transition: color 0.2s ease;

        a {
          padding: 3px 0;
        }

        .subMenuList {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          width: 150px;
          padding: 15px 0;
          font-size: 14px;
          color: var(--white);
          text-align: center;
          background-color: var(--primary);
          box-shadow: 0 10px 20px 0 rgba(11, 38, 64, 0.5);
          z-index: 5;

          .subMenuItem:not(:last-child) {
            margin-bottom: 15px;
          }
        }
      }
    }

    .langBtnWrap {
      position: relative;
      margin-left: 45px;

      .langBtn {
        display: block;
        width: 50px;
        filter: var(--primary-filter);
      }

      .langList {
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        width: 50px;
        padding: 8px 0;
        font-size: 14px;
        font-weight: 500;
        color: var(--white);
        background-color: var(--primary);
        box-shadow: 0 10px 20px 0 rgba(11, 38, 64, 0.5);
        z-index: 5;

        button {
          display: block;
          width: 100%;
          padding: 7px 0;
          text-align: center;

          &.active {
            text-decoration: underline;
            text-underline-offset: 2px;
          }

          &:not(:first-child) {
            margin-bottom: 1px;
          }
        }
      }
    }

    .menuBtn {
      display: none;
    }
  }

  @media (max-width: 1300px) {
    padding: 0;

    .wideInner {
      height: calc(100vw * (72 / 1300));

      .logo {
        width: calc(100vw * (41 / 1300));
      }

      .menuList {
        gap: calc(100vw * (45 / 1300));
        font-size: calc(100vw * (16 / 1300));

        .menuItem {
          a {
            padding: calc(100vw * (3 / 1300)) 0;
          }

          .subMenuList {
            width: calc(100vw * (150 / 1300));
            padding: calc(100vw * (15 / 1300)) 0;
            font-size: calc(100vw * (14 / 1300));
            box-shadow: 0 calc(100vw * (10 / 1300)) calc(100vw * (20 / 1300)) 0
              rgba(11, 38, 64, 0.5);

            .subMenuItem:not(:last-child) {
              margin-bottom: calc(100vw * (15 / 1300));
            }
          }
        }
      }

      .langBtnWrap {
        margin-left: calc(100vw * (45 / 1300));

        .langBtn {
          width: calc(100vw * (50 / 1300));
        }

        .langList {
          width: calc(100vw * (50 / 1300));
          padding: calc(100vw * (8 / 1300)) 0;
          font-size: calc(100vw * (14 / 1300));
          box-shadow: 0 calc(100vw * (10 / 1300)) calc(100vw * (20 / 1300)) 0
            rgba(11, 38, 64, 0.5);

          button {
            padding: calc(100vw * (7 / 1300)) 0;

            &.active {
              text-underline-offset: calc(100vw * (2 / 1300));
            }
          }
        }
      }
    }
  }

  @media (max-width: 767px) {
    .wideInner {
      height: calc(100vw * (58 / 375));

      .logo {
        width: calc(100vw * (27 / 375));
      }

      .menuBtn {
        display: block;
        width: calc(100vw * (34 / 375));
        margin-left: auto;
        filter: var(--primary-filter);
      }
    }
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  height: 100dvh;
  color: var(--white);
  background-color: var(--primary);
  overflow-y: auto;
  z-index: 10;

  .inner {
    padding: calc(100vw * (12 / 375)) 0;
  }

  .closeBtn {
    display: block;
    width: calc(100vw * (34 / 375));
    margin: 0 0 calc(100vw * (32 / 375)) auto;
  }

  .menuList {
    margin-bottom: calc(100vw * (35 / 375));

    .menuItem {
      display: flex;
      align-items: flex-start;
      gap: calc(100vw * (30 / 375));
      font-weight: 500;

      &:not(:last-child) {
        margin-bottom: calc(100vw * (35 / 375));
      }

      > a {
        width: calc(100vw * (120 / 375));
        font-size: calc(100vw * (24 / 375));
      }
    }

    .subMenuList {
      .subMenuItem {
        font-size: calc(100vw * (16 / 375));

        &:not(:last-child) {
          margin-bottom: calc(100vw * (12 / 375));
        }
      }
    }
  }

  .langBtnWrap {
    display: flex;
    align-items: center;
    gap: calc(100vw * (90 / 375));

    .langIcon {
      width: calc(100vw * (60 / 375));
      filter: var(--white-filter);
    }

    .langList {
      display: flex;
      gap: calc(100vw * (17 / 375));
      font-size: calc(100vw * (16 / 375));
      font-weight: 500;

      button {
        &.active {
          text-decoration: underline;
          text-underline-offset: calc(100vw * (2 / 375));
        }
      }
    }
  }
`;

export { Container, MobileMenu };

export default {
  Container,
  MobileMenu,
};
