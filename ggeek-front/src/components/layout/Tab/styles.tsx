import styled from "styled-components";
// simplebar
import SimpleBar from "simplebar-react";

const Container = styled(SimpleBar)`
  .simplebar-placeholder {
    display: none;
  }

  .simplebar-content-wrapper::-webkit-scrollbar,
  .simplebar-hide-scrollbar::-webkit-scrollbar {
    display: none;
  }

  ul {
    display: flex;
    gap: 20px;
  }

  li {
    flex-shrink: 0;

    a {
      position: relative;
      padding: 0 10px 8px;
      font-size: 18px;
      color: var(--neutral-600);

      &.active {
        font-weight: 500;
        color: var(--primary);

        &::after {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 2px;
          background-color: var(--primary);
          content: "";
        }
      }
    }
  }

  @media (max-width: 1300px) {
    ul {
      gap: calc(100vw * (20 / 1300));
    }

    li a {
      padding: 0 calc(100vw * (10 / 1300)) calc(100vw * (8 / 1300));
      font-size: calc(100vw * (18 / 1300));

      &.active {
        &::after {
          height: calc(100vw * (2 / 1300));
        }
      }
    }
  }

  @media (max-width: 767px) {
    ul {
      gap: calc(100vw * (6 / 375));
    }

    li a {
      padding: 0 calc(100vw * (5 / 375)) calc(100vw * (8 / 375));
      font-size: calc(100vw * (16 / 375));

      &.active {
        &::after {
          height: calc(100vw * (2 / 375));
        }
      }
    }
  }
`;

export { Container };

export default {
  Container,
};
