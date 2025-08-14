import styled from "styled-components";

const Container = styled.div`
  .sectionTitle h2 {
    width: fit-content;
    max-width: 490px;
  }

  .productList {
    display: flex;
    flex-wrap: wrap;
    gap: 60px 50px;

    .productItem {
      width: 200px;
    }
  }

  @media (max-width: 1300px) {
    .sectionTitle h2 {
      max-width: calc(100vw * (490 / 1300));
    }

    .productList {
      gap: calc(100vw * (60 / 1300)) calc(100vw * (50 / 1300));

      .productItem {
        width: calc(100vw * (200 / 1300));
      }
    }
  }

  @media (max-width: 767px) {
    .sectionTitle h2 {
      max-width: 100%;
      white-space: normal;
    }

    .productList {
      gap: calc(100vw * (20 / 375)) calc(100vw * (15 / 375));

      .productItem {
        width: calc(100vw * (164 / 375));
      }
    }
  }
`;

export { Container };

export default {
  Container,
};
