import styled from "styled-components";

const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;

  li {
    padding: 9px 14px;
    font-size: 16px;
    font-weight: 500;
    color: var(--primary);
    border: 1px solid var(--primary);
    border-radius: 500px;
    cursor: pointer;

    &.active {
      color: var(--white);
      background-color: var(--primary);
    }
  }

  @media (max-width: 1300px) {
    gap: calc(100vw * (5 / 1300));

    li {
      padding: calc(100vw * (9 / 1300)) calc(100vw * (14 / 1300));
      font-size: calc(100vw * (16 / 1300));
    }
  }

  @media (max-width: 767px) {
    gap: calc(100vw * (5 / 376));

    li {
      padding: calc(100vw * (9 / 376)) calc(100vw * (14 / 376));
      font-size: calc(100vw * (14 / 376));
    }
  }
`;

export { Container };

export default {
  Container,
};
