import styled from "styled-components";

const Container = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 450px;
  font-weight: 500;
  color: var(--neutral-300);

  @media (max-width: 1300px) {
    height: calc(100vw * (450 / 1300));
  }

  @media (max-width: 767px) {
    height: calc(100vw * (450 / 375));
  }
`;

export { Container };

export default {
  Container,
};
