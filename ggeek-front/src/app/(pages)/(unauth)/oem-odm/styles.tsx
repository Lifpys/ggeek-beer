import styled from "styled-components";

const Container = styled.main`
  .tab {
    margin-bottom: 60px;
  }

  .pagination {
    margin-top: 40px;
  }

  @media (max-width: 1300px) {
    .tab {
      margin-bottom: calc(100vw * (60 / 1300));
    }

    .pagination {
      margin-top: calc(100vw * (40 / 1300));
    }
  }

  @media (max-width: 767px) {
    .tab {
      margin-bottom: calc(100vw * (40 / 375));
    }

    .pagination {
      margin-top: calc(100vw * (30 / 375));
    }
  }
`;

export { Container };

export default {
  Container,
};
