import styled from "styled-components";

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 42px;
  font-size: 14px;
  font-weight: 500;
  color: var(--white);
  background-color: var(--primary);

  &.line {
    color: var(--primary);
    background-color: var(--white);
    border: 1px solid var(--primary);
  }

  &.white {
    color: var(--white);
    background-color: transparent;
    border: 1px solid var(--white);
  }

  @media (max-width: 1300px) {
    height: calc(100vw * (42 / 1300));
    font-size: calc(100vw * (14 / 1300));
  }

  @media (max-width: 767px) {
    height: calc(100vw * (42 / 375));
    font-size: calc(100vw * (14 / 375));
  }
`;

export { Button };

export default {
  Button,
};
