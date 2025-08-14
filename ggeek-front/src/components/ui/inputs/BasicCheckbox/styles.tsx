import styled from "styled-components";

// img
import IconCheckWhite from "@/assets/image/icon/icon_check_white.svg";
import IconCheckOff from "@/assets/image/icon/icon_check_off.svg";
import IconCheckOn from "@/assets/image/icon/icon_check_on.svg";

const Container = styled.div`
  .labelText {
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: 500;
    color: var(--neutral-600);
  }

  .checkboxWrap {
    display: flex;
    align-items: center;
    gap: 10px;

    a {
      font-size: 14px;
      color: var(--primary);
      text-decoration: underline;
      text-underline-offset: 2px;
    }
  }

  label {
    display: flex;
    align-items: center;
    gap: 10px;
    width: fit-content;
    font-size: 14px;
    color: var(--neutral-600);
    cursor: pointer;

    &:has(input:checked) .checkBox {
      background-image: url(${IconCheckOn.src});
    }

    &.white {
      color: var(--white);

      .checkBox {
        background-image: url(${IconCheckWhite.src});
      }
    }

    input {
      display: none;
    }

    .checkBox {
      flex-shrink: 0;
      display: inline-block;
      width: 20px;
      height: 20px;
      background: url(${IconCheckOff.src}) no-repeat center / cover;
    }
  }

  @media (max-width: 1300px) {
    .labelText {
      margin-bottom: calc(100vw * (10 / 1300));
      font-size: calc(100vw * (16 / 1300));
    }

    .checkboxWrap {
      gap: calc(100vw * (10 / 1300));

      a {
        font-size: calc(100vw * (14 / 1300));
        text-underline-offset: calc(100vw * (2 / 1300));
      }
    }

    label {
      gap: calc(100vw * (10 / 1300));
      font-size: calc(100vw * (14 / 1300));

      .checkBox {
        width: calc(100vw * (20 / 1300));
        height: calc(100vw * (20 / 1300));
      }
    }
  }

  @media (max-width: 767px) {
    .labelText {
      margin-bottom: calc(100vw * (10 / 375));
      font-size: calc(100vw * (16 / 375));
    }

    .checkboxWrap {
      gap: calc(100vw * (10 / 375));

      a {
        font-size: calc(100vw * (14 / 375));
        text-underline-offset: calc(100vw * (2 / 375));
      }
    }

    label {
      gap: calc(100vw * (10 / 375));
      font-size: calc(100vw * (14 / 375));

      .checkBox {
        width: calc(100vw * (20 / 375));
        height: calc(100vw * (20 / 375));
      }
    }
  }
`;

export { Container };

export default { Container };
