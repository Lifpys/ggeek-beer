import styled from "styled-components";
//img
import IconPlus from "@/assets/image/icon/icon_plus.svg";
import IconMinus from "@/assets/image/icon/icon_minus.svg";

const Container = styled.div`
  border-bottom: 1px solid var(--neutral-100);
  cursor: pointer;

  .question {
    position: relative;
    display: flex;
    align-items: center;
    gap: 50px;
    padding: 20px 15px;

    &.active {
      color: var(--white);
      background-color: var(--primary);

      &::after {
        background: url(${IconMinus.src}) no-repeat center / cover;
      }
    }

    &::after {
      flex-shrink: 0;
      width: 20px;
      height: 20px;
      background: url(${IconPlus.src}) no-repeat center / cover;
      content: "";
    }

    p {
      flex: 1;
      font-weight: 500;
    }
  }

  .answer {
    padding: 24px 50px;
    font-size: 14px;
    color: var(--black);
    line-height: 1.5;
    background-color: var(--blue);
  }

  @media (max-width: 1300px) {
    .question {
      gap: calc(100vw * (50 / 1300));
      padding: calc(100vw * (20 / 1300)) calc(100vw * (15 / 1300));

      &::after {
        width: calc(100vw * (20 / 1300));
        height: calc(100vw * (20 / 1300));
      }
    }

    .answer {
      padding: calc(100vw * (24 / 1300)) calc(100vw * (50 / 1300));
      font-size: calc(100vw * (14 / 1300));
    }
  }

  @media (max-width: 767px) {
    .question {
      gap: calc(100vw * (10 / 375));
      padding: calc(100vw * (20 / 375)) calc(100vw * (15 / 375));
      font-size: calc(100vw * (16 / 375));

      &::after {
        width: calc(100vw * (20 / 375));
        height: calc(100vw * (20 / 375));
      }
    }

    .answer {
      padding: calc(100vw * (24 / 375)) calc(100vw * (30 / 375));
      font-size: calc(100vw * (14 / 375));
    }
  }
`;

export { Container };

export default {
  Container,
};
