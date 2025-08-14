import styled from "styled-components";

const Container = styled.main`
  .tab {
    margin-bottom: 60px;
  }

  @media (max-width: 1300px) {
    .tab {
      margin-bottom: calc(100vw * (60 / 1300));
    }
  }

  @media (max-width: 767px) {
    .tab {
      margin-bottom: calc(100vw * (40 / 375));
    }
  }
`;

export { Container };

export default {
  Container,
};
